<?php
//include_once TEMPLATEPATH . 'lib/metabox/meta-box-3.2.2.class.php';
//include TEMPLATEPATH . 'lib/metabox/meta-box-usage.php';


/**
 * Registering meta boxes
 *
 * All the definitions of meta boxes are listed below with comments.
 * Please read them CAREFULLY.
 *
 * You also should read the changelog to know what has been changed before updating.
 *
 * For more information, please visit:
 * @link http://www.deluxeblogtips.com/meta-box/docs/define-meta-boxes
 */

/********************* META BOX DEFINITIONS ***********************/

$prefix = 'JS_';

global $meta_boxes;

$meta_boxes = array();


$meta_boxes[] = array(
	'id' => 'attachment',
	'title' => 'Attachment details',
	'pages' => array('attachment'),
	'context' => 'normal',		
	'priority' => 'high',			

	'fields' => array(	
		array(
			'name'		=> 'Video',
			'id'		=> $prefix . 'video',
			'desc'		=> 'Is there a vimeo link? Drop the url of the video page here<br /><strong>Portfolio section only</strong>',
			'type'		=> 'text',
			'std' 		=> false
		),
		array(
			'name'		=> 'Description',
			'id'		=> $prefix . 'description',
			'desc'		=> 'Replace this image with the text<br /><strong>Profile section only</strong>',
			'type'		=> 'textarea',
			'std' 		=> false
		),
	)
);


/********************* META BOX REGISTERING ***********************/

function JS_register_meta_boxes()
{
	global $meta_boxes;

	if ( class_exists( 'RW_Meta_Box' ) )
	{
		foreach ( $meta_boxes as $meta_box )
		{
			new RW_Meta_Box( $meta_box );
		}
	}
}
add_action( 'admin_init', 'JS_register_meta_boxes' );