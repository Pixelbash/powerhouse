<?php

//Compile theme options for use in theme header
function getOptions() {
	$options = array(
		'burl' => get_bloginfo('url'),
		'turl' => get_bloginfo('template_url'),
		'opts' => get_option('powerhouse')
	);

	return stripslashes(json_encode($options));
}

//Set up scripts for our theme
function setThemeScripts() {
	wp_deregister_script( 'jquery' );
	wp_localize_script('init', 'ajax_var', array( 'url' => admin_url('admin-ajax.php'), 'nonce' => wp_create_nonce('ajax-nonce')),1,true);
} 

add_action('wp_enqueue_scripts', 'setThemeScripts');