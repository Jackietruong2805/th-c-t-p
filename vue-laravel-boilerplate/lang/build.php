<?php


// log into terminal line by line
function logCLI(...$params)
{
  $output = [];
  foreach ($params as $key => $value) {
    array_push($output,  str_pad($value, 20));
  }
  echo join(" ", $output) . PHP_EOL;
}

// make sure script work on Window OS
function universalPath($path)
{
  return str_replace(array('/', '\\'), DIRECTORY_SEPARATOR, $path);
}

// join current file name with parent path
function pathTo($name, $parent = __DIR__)
{
  return universalPath($parent . '/' . $name);
}

// scan folder and callback a php file, except for this file (`build-json.php`)
function scan($folderPath, $callback = null)
{
  $folderPath = universalPath($folderPath);

  $dir = scandir($folderPath);
  foreach ($dir as $key => $value) {
    if (isParentPath($value)) {
      continue;
    }

    $path = pathTo($value, $folderPath);
    if ($path === __FILE__) {
      continue;
    }

    if (isFolder($value)) {
      scan($path, $callback);
    } else if (isLangFile($path)) {
      if (isset($callback) && $callback) {
        call_user_func($callback, $value, $path);
      }
    }
  }
}

function isParentPath($name)
{
  return $name === '.' || $name === '..';
}

function isFolder($name)
{
  if ($name === '.' || $name === '..') {
    return false;
  }
  return is_dir(pathTo($name));
}

function isLangFile($path)
{
  $extension = pathinfo($path, PATHINFO_EXTENSION);
  return is_file($path) && $extension === 'php';
}

function convert()
{
  $srcDir =  universalPath(__DIR__ . '/../src');
  $outputDir =  universalPath($srcDir . '/lang');
  if (!is_dir($outputDir)) {
    mkdir($outputDir);
  }
  $map = [];
  scan(__DIR__, function ($name, $path) use ($srcDir, $outputDir, &$map) {
    // $name: auth.php
    // $path: .../<root>/lang/en/auth.php

    // php
    $extension = pathinfo($path, PATHINFO_EXTENSION);
    // auth
    $fileName = str_replace(".$extension", '', $name);

    // /en/auth.php
    $relativePathToFile = str_replace(__DIR__, '', $path);

    // /en/
    $relativePathToParent = str_replace($name, '', $relativePathToFile);

    // .../<root>/lang/../src/lang/en/
    $pathToOutputFolder = $outputDir . $relativePathToParent;

    // not exist: .../<root>/lang/../src/lang/en/
    if (!is_dir($pathToOutputFolder)) {
      // create dir: .../<root>/lang/../src/lang/en/
      mkdir($pathToOutputFolder);
    }

    // .../<root>/lang/../src/lang/en/auth.ts
    $outputPath =  "{$pathToOutputFolder}{$fileName}.ts";

    // /en/auth
    $packageName = "{$relativePathToParent}{$fileName}";

    // from: .../<root>/lang/../src/lang/en/auth.ts
    // to  : /lang/en/auth
    $importPath = str_replace(
      [
        $srcDir,
        '.ts'
      ],
      '',
      $outputPath
    );

    // "/en/auth": ()=>import("/lang/en/auth")
    $map[] = "\"$packageName\": ()=>import(\"@$importPath\")";

    $content = include($path);
    $json = json_encode($content);

    /**
     * $json    = {"key":"value is :param"}';
     *    // php: echo __('key', ['param' => 1]);
     *    // "laravel" replace ":param" by 1
     * $json2   = {"key":"value is {param}"}';
     *    // vue: console.log( this.$t('key', { param: 1 }) )
     *    // "vue-i18n-lite" replace "{param}" by 1
     */
    $json2 = preg_replace('/:([0-9a-zA-Z]+)/', '{${1}}', $json);
    if ($json === false) {
      $ts = "export const _default = {}";
    } else {
      $ts = "export const _default = $json2";
    }
    $done = file_put_contents($outputPath, $ts);
    $error = [
      $json === false ? 'PARSE_ERROR' : '',
      $done === false ? 'WRITE_ERROR' : ''
    ];
    logCLI($outputPath, join('', $error));
  });

  /**
   * - issue : "\en\global": ()=>import("@\lang\en\global") -- USE \
   * - method: replace \ -> / to make sure "node-path" work on window
   * - result: "/en/global": ()=>import("@/lang/en/global") -- USE /
   */
  $constContent = str_replace('\\', '/', join(',', $map));

  $const = "export const _default = { $constContent };";
  $constPath = universalPath("$outputDir/map.ts");
  $doneConst = file_put_contents($constPath, $const);
  logCLI($constPath, $doneConst === false ? 'WRITE_ERROR' : '');
}


convert();
