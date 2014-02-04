<?php
/*
 * simpleImage.php based image resizer
 * Resize options:
		best_fit,
		adaptive_resize,
		fit_to_width,
		fit_to_height,
 *
 * - Joe Swann
 */

function jsImageResize($new_args = array()) {
	$default_args = array(
		'id'          => false,
		'url'         => false,
		'width'       => false,
		'height'      => false,
		'resize'      => 'adaptive_resize',
		'destination' => '/cache/'
	);

	$args = array_merge($default_args, $new_args);

	if(!$args['id'] && !$args['url'])      die('no id or path given');
	if(!$args['width'] || !$args['width']) die('please provide a width & height');

	//get our file info
	$file_paths = false;
	if($args['id'])  $file_paths = jsGetPathFromID($args['id']);
	if($args['url']) $file_paths = jsGetPathFromURL($args['url']);

	//add more info
	$file_paths['info']         = pathinfo( $file_paths['file_path'] );
	$file_paths['extension']    = '.'. $file_paths['info']['extension'];
	$file_paths['base_file']    = $file_paths['info']['dirname'].'/'.$file_paths['info']['filename'].'.'.$file_paths['info']['extension'];
	$file_paths['no_ext_path']  = $file_paths['info']['dirname'] . $args['destination'] . $file_paths['info']['filename'];
	$file_paths['final_folder'] = $file_paths['info']['dirname'].$args['destination'];
	$file_paths['final_path']   = $file_paths['no_ext_path'].'_'.$args['resize'] .'-'.$args['width'].'x'.$args['height'].$file_paths['extension'];
	$file_paths['final_url']    = $file_paths['source_url'] . $args['destination'] . basename( $file_paths['final_path'] );

	// check if file exists
	if ( !file_exists($file_paths['base_file']) ) 
		die('no file found');

	//check if resized file exists
	$return = false;
	$exists = false;
	$real_width  = false;
	$real_height = false;
	if(file_exists( $file_paths['final_path'] )) {
		$exists      = true;
		
		//image might have different sizes...
		$img_size    = getimagesize( $file_paths['final_path'] );
		$real_width  = $img_size[0];
		$real_height = $img_size[1];
	}

	//if it doesn't exist, time to resize
	if(!$exists) {
		//make folder if doesn't exist
		if (!file_exists($file_paths['final_folder'])) {
			mkdir($file_paths['final_folder']);
		}

		//create our image
		$img = new abeautifulsite\SimpleImage($file_paths['base_file']);

		//best fit
		if($args['resize'] == 'best_fit') {
			$img->best_fit($args['width'],$args['height']);

		//adaptive resize
		} elseif($args['resize'] == 'adaptive_resize') {
			$img->adaptive_resize($args['width'],$args['height']);

		//fit to width
		} elseif($args['resize'] == 'fit_to_width') {
			$img->fit_to_width($args['width']);

		//fit to height
		} elseif($args['resize'] == 'fit_to_height') {
			$img->fit_to_height($args['height']);

		//fit to height
		} elseif($args['resize'] == 'resize') {
			$img->resize($args['height']);
		} 

		//update our width and height with new
		$real_width  = $img->get_width();
		$real_height = $img->get_height();

		//save our image
		$img->save($file_paths['final_path']);
	}

	return array(
		'url'    => $file_paths['final_url'],
		'width'  => $real_width,
		'height' => $real_height,
	);
}

function jsGetPathFromID($att_id = false) {
	return array(
		'image_src'  => wp_get_attachment_image_src( $att_id, 'full' ),
		'file_path'  => get_attached_file( $att_id ),
		'source_url' => dirname(wp_get_attachment_url( $att_id ))
	);	
}

function jsGetPathFromURL($img_url = false) {
	$file_path = parse_url( $img_url );
	$file_path = $_SERVER['DOCUMENT_ROOT'] . $file_path['path'];

	$orig_size     = getimagesize( $file_path );
	$image_src     = array($img_url, $orig_size[0], $orig_size[1]);
	$orig_url_path = dirname($image_src[0]);

	return array(
		'image_src'  => $image_src,
		'file_path'  => $file_path,
		'source_url' => $orig_url_path
	);	
}
