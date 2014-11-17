<?php

date_default_timezone_set('Pacific/Auckland');

/*
Included classes and plugins
  - Metabox plugin by Rilwis 
  - Multiple featured images 
  - Devin Price theme options 
  - WP-LESS
  
  - SimpleImage framework 
  - Pluralizer from Laravel
*/

//Plugins
$plugin_dir = ABSPATH . 'wp-content/plugins';
require_once $plugin_dir . '/meta-box/meta-box.php';
require_once $plugin_dir . '/multiple-post-thumbnails/multi-post-thumbnails.php';
require_once $plugin_dir . '/wp-less/bootstrap-for-theme.php';

//Libraries
require_once TEMPLATEPATH . '/vendor/abeautifulsite/simpleimage/src/abeautifulsite/SimpleImage.php';

//utilities
require_once TEMPLATEPATH . '/php/utils/pluralizer.php';
require_once TEMPLATEPATH . '/php/utils/post_types.php';
require_once TEMPLATEPATH . '/php/utils/image_resizer.php';
require_once TEMPLATEPATH . '/php/utils/image_functions.php';
require_once TEMPLATEPATH . '/php/utils/header.php';
require_once TEMPLATEPATH . '/php/utils/general.php';
require_once TEMPLATEPATH . '/php/utils/form.php';

//forms
//require_once TEMPLATEPATH . '/php/forms/register.php';

//optional
//require_once TEMPLATEPATH . '/php/optional/shortcodes.php';
//require_once TEMPLATEPATH . '/php/optional/comments.php';
//require_once TEMPLATEPATH . '/php/optional/most_viewed.php';

//post types
//require_once TEMPLATEPATH . '/php/helpers/testimonial.php';

//site specific
require_once TEMPLATEPATH . '/php/post_types.php';
require_once TEMPLATEPATH . '/php/metaboxes.php';
require_once TEMPLATEPATH . '/php/wordpress.php';
require_once TEMPLATEPATH . '/php/timber.php';
require_once TEMPLATEPATH . '/php/menu.php';