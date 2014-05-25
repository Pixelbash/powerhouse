<?php

/*
Included classes and plugins
	- Metabox plugin by Rilwis 4.2.4
	- Multiple featured images 1.0
	- SimpleImage framework 2.3
	- Devin Price theme options 1.6
	- WP-LESS 1.6
*/

//set paths for frameworks
define( 'RWMB_URL', get_template_directory_uri() . '/lib/meta-box/' );
define( 'RWMB_DIR', TEMPLATEPATH . '/lib/meta-box/' );
define( 'OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/lib/options-framework-theme/inc/' );

require_once TEMPLATEPATH . '/lib/meta-box/meta-box.php';
require_once TEMPLATEPATH . '/lib/multi-post-thumbnails/multi-post-thumbnails.php';
require_once TEMPLATEPATH . '/lib/SimpleImage/src/abeautifulsite/SimpleImage.php';
require_once TEMPLATEPATH . '/lib/options-framework-theme/inc/options-framework.php';
require_once TEMPLATEPATH . '/lib/wp-less/bootstrap-for-theme.php';

/*
Custom functionality
	- Image resizer
	- Image functions
	- Custom post types
	- Custom metaboxes
	- JS scripts
	- Shortcodes
	- Wordpress filter / action tweaks
	- Header JS variables
*/
require_once TEMPLATEPATH . '/php/image_resizer.php';
require_once TEMPLATEPATH . '/php/image_functions.php';
require_once TEMPLATEPATH . '/php/post_types.php';
require_once TEMPLATEPATH . '/php/metaboxes.php';
require_once TEMPLATEPATH . '/php/optional/shortcodes.php';
require_once TEMPLATEPATH . '/php/wordpress.php';
require_once TEMPLATEPATH . '/php/header.php';
require_once TEMPLATEPATH . '/php/utils.php';

// Basic stuff
add_theme_support( 'post-thumbnails' ); 

// One off functions
add_filter('timber_context', 'add_to_context');
function add_to_context($data){
  $data['options'] = get_option('js_options');
  $data['year']    = date('Y');
  $data['is_home'] = is_home();
  
  return $data;
}

//prevent posting a project without a featured image
add_action( 'pre_post_update', 'req_featured_image' );

function req_featured_image() {
    global $post;

    //featured image check
    if( get_post_type($post->ID) == 'project' && get_post_thumbnail_id($post->ID) === '' ) {
        wp_die( 'This post type requires a featured image. Please click the back button on your browser to set one.' );
    }
}
