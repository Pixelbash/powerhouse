<?php

date_default_timezone_set('Pacific/Auckland');

/*
Included classes and plugins
  - Metabox plugin by Rilwis 4.2.4
  - Multiple featured images 1.0
  - SimpleImage framework 2.3
  - Devin Price theme options 1.6
  - WP-LESS 1.6
  - Pluralizer from Laravel
*/

//set paths for frameworks
define( 'RWMB_URL', get_template_directory_uri() . '/php/lib/meta-box/' );
define( 'RWMB_DIR', TEMPLATEPATH . '/php/lib/meta-box/' );
define( 'OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/php/lib/options-framework-theme/inc/' );

require_once TEMPLATEPATH . '/php/lib/meta-box/meta-box.php';
require_once TEMPLATEPATH . '/php/lib/multi-post-thumbnails/multi-post-thumbnails.php';
require_once TEMPLATEPATH . '/php/lib/SimpleImage/src/abeautifulsite/SimpleImage.php';
require_once TEMPLATEPATH . '/php/lib/options-framework-theme/inc/options-framework.php';
require_once TEMPLATEPATH . '/php/lib/wp-less/bootstrap-for-theme.php';

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