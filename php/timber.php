<?php

// Timber context
add_filter('timber_context', 'add_to_context');
function add_to_context($data){
  $data['options']   = get_option('js_options');
  $data['year']      = date('Y');
  $data['is_home']   = is_home();
  $data['main_menu'] = getMainMenu();
  
  return $data;
}