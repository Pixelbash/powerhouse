<?php 

function jsSetPostTypes($register_post_types) {
  
  foreach($register_post_types as $post_type) { 
  
    $name = $post_type['name'];

    //Now with advanced pluralizing!
    //eg child -> children
    $single_lcase = Pluralizer::singular($name);
    $plural_lcase = Pluralizer::plural($name);

    //casing strings
    $single_ucase = ucfirst($name);
    $plural_ucase = ucfirst($plural_lcase);

    //support for custom support arrays
    $has_archive  = false;
    $supports     = array('title','thumbnail','editor','page-attributes','custom-fields', 'excerpt','trackbacks','comments','revisions','author');
    $slug         = true;

    if(isset($post_type['has_archive']))   $has_archive = $post_type['has_archive'];
    if(isset($post_type['supports']))   $supports       = $post_type['supports'];
    if(isset($post_type['slug']))       $slug           = $post_type['slug'];

    //register post type
    register_post_type( $single_lcase,
      array(
        'labels'        => array(
        'name'          => _x($plural_ucase, 'post type general name'),
        'singular_name' => _x($single_ucase, 'post type singular name'),
      ),
      'public'          => true,
      'show_ui'         => true,
      'capability_type' => 'post',
      'hierarchical'    => false,
      'query_var'       => true,
      'supports'        => $supports,
      'rewrite'         => $slug,
      'has_archive'     => $has_archive
      )
    );

    //support for categories
    if(isset($post_type['category']) && $post_type['category'] == true) {
      register_taxonomy($single_lcase.'_categories', $single_lcase, 
        array(
          'label'        => $single_ucase .' Categories', 
          'public'       => true,
          'show_ui'      => true,
          'hierarchical' => true, 
          'query_var'    => true, 
          'rewrite'      => true
        ));
    }

    //support for categories
    if(isset($post_type['tag']) && $post_type['tag'] == true) {
      register_taxonomy($single_lcase.'_tags', $single_lcase, 
        array(
          'label'        => $single_ucase.' Tags', 
          'public'       => true,
          'show_ui'      => true,
          'hierarchical' => false, 
          'query_var'    => true, 
          'rewrite'      => true
        ));
    }
  }
}
