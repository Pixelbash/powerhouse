<?php

date_default_timezone_set('Pacific/Auckland');

/*

*/

//Plugins
// $plugin_dir = WP_CONTENT_DIR . '/plugins';
// require_once $plugin_dir . '/multiple-post-thumbnails/multi-post-thumbnails.php';


//Libraries
require_once TEMPLATEPATH . '/vendor/autoload.php';

//utilities
require_once TEMPLATEPATH . '/php/utils/plugin_activation.php';
require_once TEMPLATEPATH . '/php/utils/pluralizer.php';
require_once TEMPLATEPATH . '/php/utils/post_types.php';
require_once TEMPLATEPATH . '/php/utils/image_functions.php';
require_once TEMPLATEPATH . '/php/utils/header.php';
require_once TEMPLATEPATH . '/php/utils/attachment.php';
require_once TEMPLATEPATH . '/php/utils/form.php';

//optional
//require_once TEMPLATEPATH . '/php/shortcodes/block.php';

//post types
require_once TEMPLATEPATH . '/php/formatters/pages.php';
require_once TEMPLATEPATH . '/php/formatters/posts.php';

//site specific
require_once TEMPLATEPATH . '/php/post_types.php';
require_once TEMPLATEPATH . '/php/metaboxes.php';
require_once TEMPLATEPATH . '/php/wordpress.php';
require_once TEMPLATEPATH . '/php/options.php';
require_once TEMPLATEPATH . '/php/menu.php';
require_once TEMPLATEPATH . '/php/forms.php';
require_once TEMPLATEPATH . '/php/ajax.php';
require_once TEMPLATEPATH . '/php/timber.php';

Pixelbash\Header::scripts();