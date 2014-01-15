<?php

function getOptions() {
	//all the other js related theme options compile here
	$options = array(
		'burl' => get_bloginfo('url'),
		'turl' => get_bloginfo('template_url'),
		'opts' => get_option('optionsframework_sofresh')
	);

	return stripslashes(json_encode($options));
}


function js_scripts_method() {
	//jquery switch
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
    wp_enqueue_script( 'jquery' );
    
	//this is for ajax functions
	wp_localize_script('init', 'ajax_var', array(  
        'url' => admin_url('admin-ajax.php'),  
        'nonce' => wp_create_nonce('ajax-nonce')  
	),1,true);

	//enqueue scripts
	wp_enqueue_script('onscreen', get_bloginfo( 'template_url' ) . '/js/onscreen/jquery.onscreen.min.js',array(),1,true);
	wp_enqueue_script('init', get_bloginfo( 'template_url' ) . '/js/init.js',array(
		'onscreen',
		'jquery'
	),1,true);

	//enqueue styles
	wp_enqueue_style( 'main', get_bloginfo( 'template_url' ) . '/less/style.less' );
} 

add_action('wp_enqueue_scripts', 'js_scripts_method');

//Process .less files
if (class_exists('WPLessPlugin')){
	$lessConfig = WPLessPlugin::getInstance()->getConfiguration();

	// compiles in the active theme, in a ‘compiled-css’ subfolder
	$lessConfig->setUploadDir(get_stylesheet_directory() . '/cache');
	$lessConfig->setUploadUrl(get_stylesheet_directory_uri() . '/cache');
}
add_action('wp_print_styles', array($WPLessPlugin, 'processStylesheets'));