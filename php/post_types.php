<?php

add_action( 'init', 'post_types' );

function post_types() {
  $register_post_types = array(
    array('name' => 'project')
  );
  
  foreach($register_post_types as $post_type) { 
  
    //Pluralising strings
    $single_lcase = $post_type['name'];
    $plural_lcase = $post_type['name'] . 's';
    $single_ucase = ucfirst($post_type['name']);
    $plural_ucase = ucfirst($post_type['name'] . 's');

    //support for custom support arrays
    $supports     = array('title','thumbnail','editor','page-attributes','custom-fields', 'excerpt','trackbacks','comments','revisions','author');
    $slug         = true;

    if(isset($post_type['supports']))   $supports = $post_type['supports'];
    if(isset($post_type['slug']))       $slug     = $post_type['slug'];

    //register post type
    register_post_type( $single_lcase,
      array(
        'labels' => array(
        'name' => _x($plural_ucase, 'post type general name'),
        'singular_name' => _x($single_ucase, 'post type singular name'),
      ),
      'public' => true,
      'show_ui' => true,
      'capability_type' => 'post',
      'hierarchical' => false,
      'query_var' => true,
      'supports' => $supports,
      'rewrite' => $slug
      )
    );

    //support for categories
    if(isset($post_type['category']) && $post_type['category'] == true) {
      register_taxonomy($plural_lcase, $single_lcase, 
        array(
          'label' => $plural_ucase, 
          'public' => true,
          'show_ui' => true,
          'hierarchical' => true, 
          'query_var' => true, 
          'rewrite' => true
        ));
    }
  }
}
