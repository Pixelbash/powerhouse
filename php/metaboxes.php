<?php

add_filter( 'rwmb_meta_boxes', 'jsRegisterMeta' );

function jsRegisterMeta( $meta_boxes ) {
  $prefix = 'js_';
  // $meta_boxes[] = [
  //   'id'         => 'standard',
  //   'title'      => __( 'Project Information', 'js' ),
  //   'post_types' =>  [ 'project' ],
  //   'autosave'   => true,
  //   'fields'     =>  [
  //     [
  //       'name'  => __( 'Location', 'js' ),
  //       'id'    => "{$prefix}project_location",
  //       'desc'  => __( 'Project Location', 'js' ),
  //       'type'  => 'text'
  //     ],
  //     [
  //       'name'  => __( 'Completed', 'js' ),
  //       'id'    => "{$prefix}project_completed",
  //       'desc'  => __( 'Project staus', 'js' ),
  //       'type'  => 'text'
  //     ],
  //     [
  //       'name'  => __( 'Gallery', 'js' ),
  //       'id'    => "{$prefix}project_images",
  //       'desc'  => __( 'Gallery Images', 'js' ),
  //       'type'  => 'image_advanced',
  //       'max_file_uploads' => 12,
  //     ],
  //     [
  //       'name'  => __( 'Home Image', 'js' ),
  //       'id'    => "{$prefix}project_home_image",
  //       'desc'  => __( 'Portrait image used on the home page', 'js' ),
  //       'type'  => 'image_advanced',
  //       'max_file_uploads' => 1,
  //     ],
  //   ],
  //   'validation' => [
  //     'rules'    => [
  //       "{$prefix}project_location" => [
  //         'required'  => true,
  //         'minlength' => 2,
  //       ],
  //       "{$prefix}project_completed" => [
  //         'required'  => true,
  //         'minlength' => 3,
  //         'maxlength' => 20,
  //       ],
  //       "{$prefix}project_home_image" => [
  //         'required'  => true,
  //       ],
  //     ],
  //     // optional override of default jquery.validate messages
  //     'messages' => [
  //       "{$prefix}project_location" => [
  //         'required'  => __( 'Location is required', 'js' ),
  //         'minlength' => __( 'Location must be at least 2 characters', 'js' ),
  //       ],
  //       "{$prefix}project_completed" => [
  //         'required'  => __( 'Completed date is required', 'js' ),
  //         'minlength' => __( 'Date must be a 4 digit year (eg 2016)', 'js' ),
  //       ],
  //     ],
  //   ],
  // ];

   $meta_boxes[] = [
    'id'         => 'standard',
    'title'      => __( 'Information', 'js' ),
    'post_types' =>  [ 'page' ],
    'autosave'   => true,
    'fields'     =>  [
      [
        'name'  => __( 'Subtitle', 'js' ),
        'id'    => "{$prefix}page_subtitle",
        'desc'  => __( 'Page Subtitle', 'js' ),
        'type'  => 'text'
      ],
    ]
  ];

  return $meta_boxes;
}
