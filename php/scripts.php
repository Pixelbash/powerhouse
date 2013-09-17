<?php

function js_scripts_method() {
	//jquery switch
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.9/jquery.js');
    wp_enqueue_script( 'jquery' );
	//this is for ajax functions
	wp_localize_script('init', 'ajax_var', array(  
        'url' => admin_url('admin-ajax.php'),  
        'nonce' => wp_create_nonce('ajax-nonce')  
    )); 

	//enqueue scripts
    wp_enqueue_script('less', get_bloginfo( 'template_url' ) . '/js/less/less.js',array('jquery'));
	wp_enqueue_script('init', get_bloginfo( 'template_url' ) . '/js/init.js',array(
		'less',
		'jquery'
	));
} 

add_action('wp_enqueue_scripts', 'js_scripts_method');