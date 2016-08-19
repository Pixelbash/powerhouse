<?php

//Theme support additions
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );

//remove post type stuff we don't need
add_action( 'init', 'jsSetPostSupports' );
function jsSetPostSupports() {
  //Usually needed
	//remove_post_type_support( 'post', 'editor' );
	//remove_post_type_support( 'post', 'author' );
	//remove_post_type_support( 'post', 'excerpt' );
	//remove_post_type_support( 'post', 'revisions' );
  
  //Usually not needed
  remove_post_type_support( 'post', 'trackbacks' );
  remove_post_type_support( 'post', 'comments' );
	add_post_type_support( 'post', 'page-attributes' );

  //Clear taxonomy details
	//register_taxonomy('post_tag', array());
	//register_taxonomy('category', array());
}

register_nav_menus( array(
  'header' => 'Main menu',
  'mobile' => 'Mobile menu',
  'footer' => 'Footer menu',
) );

//Excerpt modification
function jsSetExcerpt($more) {
  global $post;
	return "&hellip;";
} 
add_filter('excerpt_more', 'jsSetExcerpt');



// prevent publishing a post type without a featured image
// add_action( 'pre_post_update', 'require_featured_image' );
// function require_featured_image() {
//   global $post;

//   //featured image check
//   if( get_post_type($post->ID) == 'project' && get_post_thumbnail_id($post->ID) === '' ) {
//       wp_die( 'This post type requires a featured image. Please click the back button on your browser to set one.' );
//   }
// }