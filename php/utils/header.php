<?php
namespace Pixelbash;

class Header {
  //Compile theme options for use in theme header
  static function options() {

    wp_reset_query();
  	$data = array(
      't_url' => \get_template_directory_uri(),
      'a_url' => admin_url('admin-ajax.php')
  	);

  	return stripslashes(json_encode($data));
  }

  //Set up scripts for our theme
  static function scripts() {
    add_action('wp_print_scripts', function() {
      // wp_dequeue_script( 'jquery' ,999);
      // wp_deregister_script( 'underscore' ,100);
      // wp_deregister_script( 'backend' ,100);
    	//wp_localize_script('init', 'ajax_var', array( 'url' => admin_url('admin-ajax.php'), 'nonce' => wp_create_nonce('ajax-nonce')),1,true);
      if(!is_admin()) {
        wp_dequeue_script('jquery');
        // wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js', false, '1.11.2');
        // wp_enqueue_script('jquery');
      }
    });
  }
}
