<?php

function getSinglePost() {
	global $post;

	//featured image
	$image = js_resize( get_post_thumbnail_id($post->ID), '', 320, 180, true );
	$image_url = $image['url'];

	//gallery
	$j = 0;
	$images = array();
	$attachments = rwmb_meta( 'JS_images', 'type=image' );
	if(!empty($attachments)) {
		foreach ( $attachments as $key => $att ) {
			$src = $att['full_url'];
		    if($src) {
				$image = js_resize( $key , '', 840, 472, true );
				$images[$j] = $image;
				$j++;
			}
		}
	}

	//date
	$date = get_the_date('d/m/y');

	//author
	$author = get_the_author_meta('first_name', $post->post_author) . ' ' . get_the_author_meta('last_name', $post->post_author);
	if($author == ' ') $author = false;

	//categories
	$categories = wp_get_post_categories(get_the_id());
	
	$category_str = '';
	if(sizeof($categories) == 1) $category_str = 'Category: ';
	if(sizeof($categories) > 1) $category_str = 'Categories: ';

	foreach($categories as $i => $c){
		if($i > 0) $category_str .= ', ';
		$cat = get_category( $c );
		$cat_link = get_category_link($c);
		$category_str .= "<a href=\"{$cat_link}\">$cat->name</a>";
	}

	$post = array(
		'id' => get_the_id(),
		'date' => $date,
		'title' => get_the_title(),
		'thumb' => $image_url,
		'gallery' => $images,
		'categories' => $category_str,
		'author' => $author,
		'author_href' => get_author_posts_url(get_the_author_meta('ID', $post->post_author)),
		'content' => apply_filters('the_content', get_the_content()),
		'post_image' => urlencode($images[0]['url']),
		'href' => get_permalink(),
	);	
	return $post;
}