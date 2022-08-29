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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<body>
  <div id="app"></div>
  <?= $files['script'] ??''; ?>
</body>




</html>
