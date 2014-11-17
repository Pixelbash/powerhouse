<?php

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