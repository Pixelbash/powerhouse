<?php

// Timber context
add_filter('timber_context', 'jsAddToContext');
function jsAddToContext($data){
  $data['options']   = get_option('js_options');
  $data['year']      = date('Y');
  $data['is_home']   = is_home();
  $data['main_menu'] = getMainMenu();
  
  return $data;
}