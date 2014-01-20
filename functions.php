<?php

/*
Included classes and plugins
	- Metabox plugin by Rilwis 4.2.4
	- Multiple featured images 1.0
	- SimpleImage framework 2.3
	- Devin Price theme options 1.6
	- WP-LESS 1.6
*/

require_once TEMPLATEPATH . '/lib/meta-box/meta-box.php';
require_once TEMPLATEPATH . '/lib/multi-post-thumbnails/multi-post-thumbnails.php';
require_once TEMPLATEPATH . '/lib/SimpleImage/src/abeautifulsite/SimpleImage.php';
define( 'OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/lib/options-framework-theme/inc/' );
require_once TEMPLATEPATH . '/lib/options-framework-theme/inc/options-framework.php';
require_once TEMPLATEPATH . '/lib/wp-less/bootstrap-for-theme.php';

/*
Custom functionality
	- Image resizer
	- Custom post types
	- Custom metaboxes
	- JS scripts
	- Shortcodes
	- Wordpress filter / action tweaks
	- Header JS variables
*/
require_once TEMPLATEPATH . '/php/image_resizer.php';
require_once TEMPLATEPATH . '/php/post_types.php';
require_once TEMPLATEPATH . '/php/metaboxes.php';
require_once TEMPLATEPATH . '/php/optional/shortcodes.php';
require_once TEMPLATEPATH . '/php/wordpress.php';
require_once TEMPLATEPATH . '/php/header.php';
require_once TEMPLATEPATH . '/php/utils.php';

// One off functions