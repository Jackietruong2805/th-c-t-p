<?php


use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;


function parseFileLink($sourcePath = '')
{
  $output = [
    "script" => "",
    "style" => '',
  ];

  if (!$sourcePath) {
    return $output;
  }

  try {
    $env = Config::get('app.env');
    $basePublicPath = "";
    $pathToManifest = public_path("manifest.json");

    $manifest = json_decode(file_get_contents($pathToManifest), true);
    $module = $manifest[$sourcePath] ?? [];

    $file = $module['file'] ?? '';
    $css = $module['css'] ?? [];

    $output["script"] = "<script type=\"module\" src=\"{$basePublicPath}/{$file}\"></script>";
    foreach ($css as $key => $value) {
      $output['style'] .= "<link rel=\"stylesheet\" href=\"{$basePublicPath}/{$value}\">";
    }

    return $output;
  } catch (\Throwable $th) {
    Log::error("parseFileLink {$sourcePath}", [$th->getMessage(), $th->getFile(), $th->getLine(), $th->getCode()]);
    $output["script"] = "<script data-parse-error></script>";
    return $output;
  }
}
