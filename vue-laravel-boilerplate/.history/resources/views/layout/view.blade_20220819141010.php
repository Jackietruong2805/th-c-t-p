@php
/**
 * USAGE
 * ```php
 * // some.blade.php
 * @include('layout.view', ['source'=> 'src/main.ts'])
 * ```
 * - `src/main.ts`: is from entry file, review file `/public/manifest.json`
 */
$files = parseFileLink($source);
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  @include('layout.header')

  <?= $files['style'] ??''; ?>
  <style>
    #app {
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body>
  <div id="app"></div>
  <?= $files['script'] ??''; ?>
</body>


<script>
  var fa = require("fontawesome");
</script>

</html>
