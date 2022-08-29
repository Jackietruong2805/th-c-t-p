<?php

namespace App\Http\Controllers;

use Artesaos\SEOTools\Traits\SEOTools;

class ViewController extends Controller
{
  use SEOTools;
  //

  function __construct()
  {
    // always add keywords from 'seotools.defaults.keywords'
    $key = $this->seo()->metatags()->getKeywords();
    $this->seo()->metatags()->setKeywords($key);
  }
}
