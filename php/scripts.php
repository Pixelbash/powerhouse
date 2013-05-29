<?php

function js_scripts_method() {
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js');
    wp_enqueue_script( 'jquery' );

	wp_enqueue_script('plugins', get_bloginfo( 'template_url' ) . '/js/plugins.js',array('jquery'));
	wp_enqueue_script('init', get_bloginfo( 'template_url' ) . '/js/init.js',array(
		'plugins',
		'jquery'));
} 
add_action('wp_enqueue_scripts', 'js_scripts_method');