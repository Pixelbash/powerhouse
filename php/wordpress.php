<?php

//Theme support additions
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );

//remove post type stuff we don't need
add_action( 'init', 'edit_post_supports' );
function edit_post_supports() {
	//remove_post_type_support( 'post', 'editor' );
	//remove_post_type_support( 'post', 'author' );
	remove_post_type_support( 'post', 'trackbacks' );
	//remove_post_type_support( 'post', 'excerpt' );
	remove_post_type_support( 'post', 'comments' );
	//remove_post_type_support( 'post', 'revisions' );
	add_post_type_support( 'post', 'page-attributes' );
	//register_taxonomy('post_tag', array());
	//register_taxonomy('category', array());
}

//Excerpt modification
function new_excerpt_more($more) {
global $post;
	return "&hellip;";
}
add_filter('excerpt_more', 'new_excerpt_more');

//Widgets
function powerhouse_widgets_init() {
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

add_action( 'widgets_init', 'powerhouse_widgets_init' );