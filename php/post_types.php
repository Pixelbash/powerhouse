<?php

$post_types = array(
  array(
    'name' => 'testimonial',
    'supports' => array(
      'title','page-attributes' //,'editor','thumbnail','custom-fields', 'excerpt','trackbacks','comments','revisions','author'
    ),
  )
);

jsSetPostTypes($post_types);
