<?php

function jsGetPaginatedImages($options = array()) {
  $results = false;
  $defaults = array(
    'ids' => array(),
    'page' => 1,
    'page_size' => 50,
    'images' => array(
      'x_size' => 100, 
      'y_size' => 100, 
      'resize' => 'adaptive_resize'
      )
    );

  $settings = array_merge($defaults, $options);

  //process image_ids to get
  $ids    = $settings['ids'];
  $page   = $settings['page'] - 1;
  $size   = $settings['page_size'];
  $length = $settings['page_size'];
  $offset = $page * $size;

  if(!empty($ids)) {
    $image_ids = array_slice($ids, $offset, $length);

    $results = array(
      'page'   => $page,
      'offset' => $offset,
      'size'   => $size,
      'count'  => sizeof($image_ids),
      'images' => getImages(array(
        'image_ids' => $image_ids, 
        'x_size' => $settings['images']['x_size'], 
        'y_size' => $settings['images']['y_size'], 
        'resize' => $settings['images']['resize'],
        ))
      );
  }

  return $results;
}

function jsGetImages($options = array()) {
  $defaults = array(
    'image_ids' => array(), 
    'x_size' => 100, 
    'y_size' => 100, 
    'resize' => 'adaptive_resize'
    );

  $settings = array_merge($defaults, $options);
  $image_ids = $settings['image_ids'];

  $images = array();
  $j = 0;
  if(!empty($image_ids)) {
    foreach ( $image_ids as $id ) {
      $attmeta = get_attachment($id);
      $image   = jsImageResize( array(
        'id'     => $id,
        'width'  => $settings['x_size'],
        'height' => $settings['y_size'],
        'resize' => $settings['resize']
        ) ); 

      $images[$j] = array(
        'id'     => $j,
        'href'   => $image['url'],
        'width'  => $image['width'],
        'height' => $image['height'],
        'meta'   => $attmeta
        );
      $j++;
    }
  } else {
    $images = false;
  }

  return $images;
}