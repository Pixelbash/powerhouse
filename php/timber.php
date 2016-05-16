<?php

namespace Pixelbash;

// Timber context
add_filter('timber_context', function($data){
  $options = get_option('powerhouse');
  $data['options']   = $options;
  $data['year']      = date('Y');
  $data['is_home']   = is_home();
  $data['main_menu'] = Menu::get('header');
  $data['mobile_menu'] = Menu::get('mobile');
  $data['footer_menu'] = Menu::get('footer');

  $data['template_uri'] = \get_template_directory_uri();
  
  return $data;
});
