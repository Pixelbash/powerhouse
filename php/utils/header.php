<?php

function getOptions() {
	//all the other js related theme options compile here
	$options = array(
		'burl' => get_bloginfo('url'),
		'turl' => get_bloginfo('template_url'),
		'opts' => get_option('powerhouse')
	);

	return stripslashes(json_encode($options));
}

function js_scripts_method() {
	wp_deregister_script( 'jquery' );
	wp_localize_script('init', 'ajax_var', array( 'url' => admin_url('admin-ajax.php'), 'nonce' => wp_create_nonce('ajax-nonce')),1,true);
	wp_enqueue_style( 'main', get_bloginfo( 'template_url' ) . '/less/style.less' );
} 

add_action('wp_enqueue_scripts', 'js_scripts_method');

//Process .less files
if (class_exists('WPLessPlugin')){
	$lessConfig = WPLessPlugin::getInstance()->getConfiguration();
	$lessConfig->setUploadDir(get_stylesheet_directory() . '/cache');
	$lessConfig->setUploadUrl(get_stylesheet_directory_uri() . '/cache');
  add_action('wp_print_styles', array($WPLessPlugin, 'processStylesheets'));
}
