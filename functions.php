<?php

//Metabox plugin by Rilwis
require_once TEMPLATEPATH . '/lib/meta-box/meta-box.php';

//Multiple featured images
require_once TEMPLATEPATH . '/lib/multi-post-thumbnails/multi-post-thumbnails.php';

//Theme options
define( 'OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/lib/devinsays-options/' );
require_once TEMPLATEPATH . '/lib/devinsays-options/options-framework.php';

require_once TEMPLATEPATH . '/php/image_resizer.php';
require_once TEMPLATEPATH . '/php/post_types.php';
require_once TEMPLATEPATH . '/php/metaboxes.php';
require_once TEMPLATEPATH . '/php/scripts.php';
require_once TEMPLATEPATH . '/php/shortcodes.php';
require_once TEMPLATEPATH . '/php/wordpress.php';
require_once TEMPLATEPATH . '/php/header.php';

///////////////////////////////////////////////////////////////////////////////
//////////////////////////// EXTRA FUNCTIONS //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// utility does it exist function
function exists($var = null) {
	return (isset($var) && $var) ? true : false;
}

//function that gets attachment meta
function get_attachment( $attachment_id ) {

	$attachment = get_post( $attachment_id );
	return array(
		'alt'         => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
		'caption'     => $attachment->post_excerpt,
		'description' => $attachment->post_content,
		'href'        => get_permalink( $attachment->ID ),
		'src'         => $attachment->guid,
		'title'       => $attachment->post_title
	);
}