<?php
namespace Pixelbash;

class Header {
  //Compile theme options for use in theme header
  static function options() {
  	$options = array(
  		'opts' => get_option('powerhouse')
  	);

  	return stripslashes(json_encode($options));
  }

  //Set up scripts for our theme
  static function scripts() {
    add_action('wp_enqueue_scripts', function() {
    	wp_deregister_script( 'jquery' );
    	wp_localize_script('init', 'ajax_var', array( 'url' => admin_url('admin-ajax.php'), 'nonce' => wp_create_nonce('ajax-nonce')),1,true);
    });
  }
}
