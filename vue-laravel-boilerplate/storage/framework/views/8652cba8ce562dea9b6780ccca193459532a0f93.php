<?php
/**
 * USAGE
 * ```php
 * // some.blade.php
 * @include('layout.view', ['source'=> 'src/main.ts'])
 * ```
 * - `src/main.ts`: is from entry file, review file `/public/manifest.json`
 */
$files = parseFileLink($source);
?>
<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
  <?php echo $__env->make('layout.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

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

</html>
<?php /**PATH /Users/hy/Documents/queenb-git/vue-laravel-boilerplate/resources/views/layout/view.blade.php ENDPATH**/ ?>