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
  'primary' => 'Main website menu'
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

//Widgets
function jsSetWidgets() {
	/*
	register_sidebar( array(
		'name' => __( 'Footer Widgets 1', 'powerhouse' ),
		'id' => 'footer-widgets-1',
		'description' => __( 'The first footer sidebar', 'powerhouse' ),
		'before_widget' => '<div id="%1$s" class="span4 widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
	register_sidebar( array(
		'name' => __( 'Footer Widgets 2', 'powerhouse' ),
		'id' => 'footer-widgets-2',
		'description' => __( 'The first footer sidebar', 'powerhouse' ),
		'before_widget' => '<div id="%1$s" class="span4 widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
	register_sidebar( array(
		'name' => __( 'Footer Widgets 3', 'powerhouse' ),
		'id' => 'footer-widgets-3',
		'description' => __( 'The first footer sidebar', 'powerhouse' ),
		'before_widget' => '<div id="%1$s" class="span4 widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
	*/
}

add_action( 'widgets_init', 'jsSetWidgets' );