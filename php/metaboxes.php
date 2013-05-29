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


$meta_boxes[] = array(
	'id' => 'project',
	'title' => 'Project details',
	'pages' => array('project'),	
	'context' => 'normal',		
	'priority' => 'high',			

	'fields' => array(	
		array(
			'name'		=> 'Images',
			'id'		=> $prefix . 'images',
			'desc'		=> 'Image attachments',
			'type'		=> 'image_advanced',
			'max_file_uploads' => 24,
		),
	)
);

$meta_boxes[] = array(
	'id' => 'Profile',
	'title' => 'Profile details',
	'pages' => array('profile'),	
	'context' => 'normal',		
	'priority' => 'high',			

	'fields' => array(	
		array(
			'name'		=> 'Images',
			'id'		=> $prefix . 'images',
			'desc'		=> 'Image attachments',
			'type'		=> 'image_advanced',
			'max_file_uploads' => 24,
		),
	)
);


$meta_boxes[] = array(
	'id' => 'Publication',
	'title' => 'Publication details',
	'pages' => array('publication'),	
	'context' => 'normal',		
	'priority' => 'high',			

	'fields' => array(	
		array(
			'name'		=> 'PDF',
			'id'		=> $prefix . 'pdf',
			'desc'		=> 'PDF Attachment',
			'type'		=> 'file_advanced',
			'multiple'	=> false,
			'max_file_uploads' => 1,
		),
	)
);



/********************* META BOX REGISTERING ***********************/

function ARG_register_meta_boxes()
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
add_action( 'admin_init', 'ARG_register_meta_boxes' );