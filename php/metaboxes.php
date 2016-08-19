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

   $meta_boxes[] = [
    'id'         => 'standard',
    'title'      => __( 'Information', 'js' ),
    'post_types' =>  [ 'person' ],
    'autosave'   => true,
    'fields'     =>  [
      [
        'name'  => __( 'Position', 'js' ),
        'id'    => "{$prefix}person_position",
        'type'  => 'text'
      ],
      [
        'name'  => __( 'Phone', 'js' ),
        'id'    => "{$prefix}person_phone",
        'type'  => 'text'
      ],
      [
        'name'  => __( 'Email', 'js' ),
        'id'    => "{$prefix}person_email",
        'type'  => 'text'
      ],
      [
        'name'  => __( 'CV Upload', 'js' ),
        'id'    => "{$prefix}person_cv",
        'type'  => 'file'
      ],
    ]
  ];

   $meta_boxes[] = [
    'id'         => 'standard',
    'title'      => __( 'Information', 'js' ),
    'post_types' =>  [ 'endorsement' ],
    'autosave'   => true,
    'fields'     =>  [
      [
        'name'  => __( 'Location', 'js' ),
        'id'    => "{$prefix}endorsement_location",
        'desc'  => __( 'eg. Tenant at Lighter Quay', 'js' ),
        'type'  => 'text'
      ],
    ]
  ];

   $meta_boxes[] = [
    'id'         => 'standard',
    'title'      => __( 'Information', 'js' ),
    'post_types' =>  [ 'development' ],
    'autosave'   => true,
    'fields'     =>  [
      [
        'name'  => __( 'Addresses', 'js' ),
        'id'    => "{$prefix}development_addresses",        
        'type'  => 'textarea',
        'clone' => true
      ],
      [
        'name'  => __( 'Gallery', 'js' ),
        'id'    => "{$prefix}development_images",
        'type'  => 'image_advanced',
        'max_file_uploads' => 12,
      ],

    ]
  ];

  $meta_boxes[] = [
    'id'         => 'standard',
    'title'      => __( 'Information', 'js' ),
    'post_types' =>  [ 'building' ],
    'autosave'   => true,
    'fields'     =>  [
      [
        'name'  => __( 'Password', 'js' ),
        'id'    => "{$prefix}building_password",
        'desc'  => __( 'eg. m23F3f#$', 'js' ),
        'type'  => 'text'
      ],
      [
        'name'  => __( 'Rules (PDF)', 'js' ),
        'id'    => "{$prefix}building_pdf",
        'type'  => 'file',
        'max_file_uploads' => 1,
      ],
      [
        'name'  => __( 'Form names', 'js' ),
        'id'    => "{$prefix}building_form_names",
        'desc'  => __( 'eg. Swipe Tag Registration Form. NOTE: Number + order of titles, shortcodes & pdf\'s must match', 'js' ),
        'type'  => 'text',
        'clone' => true
      ],
      [
        'name'  => __( 'Form shortcode', 'js' ),
        'id'    => "{$prefix}building_forms",
        'desc'  => __( 'eg. [ninja_forms_display_form id="7"]', 'js' ),
        'type'  => 'text',
        'clone' => true
      ],
      [
        'name'  => __( 'Form PDF\'s', 'js' ),
        'id'    => "{$prefix}building_form_pdf",
        'type'  => 'file',
      ],
    ]
  ];

  //  $meta_boxes[] = [
  //   'id'         => 'standard',
  //   'title'      => __( 'Information', 'js' ),
  //   'post_types' =>  [ 'person' ],
  //   'autosave'   => true,
  //   'fields'     =>  [
  //     [
  //       'name'  => __( 'Location', 'js' ),
  //       'id'    => "{$prefix}person_location",
  //       'desc'  => __( 'This persons location', 'js' ),
  //       'type'  => 'text'
  //     ],
  //     [
  //       'name'  => __( 'Position', 'js' ),
  //       'id'    => "{$prefix}person_position",
  //       'desc'  => __( 'This persons title', 'js' ),
  //       'type'  => 'text'
  //     ],
  //   ]
  // ];

  if(jsRegisterMetaPageCheck('page-contact.php')) {

     $meta_boxes[] = [
      'id'         => 'standard',
      'title'      => __( 'Contact', 'js' ),
      'post_types' =>  [ 'page' ],
      'autosave'   => true,
      'fields'     =>  [
        [
          'name'  => __( 'Details', 'js' ),
          'id'    => "{$prefix}contact_details",
          'desc'  => __( 'eg. Address', 'js' ),
          'type'  => 'textarea',
          'clone' => true
        ],
        [
          'name'  => __( 'Person', 'js' ),
          'id'    => "{$prefix}contact_person",
          'desc'  => __( '', 'js' ),
          'type'  => 'textarea',
          'clone' => true
        ],
      ]
    ];

  }

  return $meta_boxes;
}


function jsRegisterMetaPageCheck($page_templates = false) {
  // Always include in the frontend to make helper function work
  if ( ! is_admin() ) return true;

  // Always include for ajax
  if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) return true;

  // Check for page template
  $template = get_post_meta( jsGetPostID(), '_wp_page_template', true );

  if($template && $page_templates) {
    if(is_array($page_templates)) {
      if ( in_array( $template, $page_templates ) ) {
        return true;
      }
    } else if(is_string($page_templates)) {
      if($template == $page_templates) {
        return true;
      }
    }
  }

  // If no condition matched
  return false;
}

function jsGetPostID() {
  if ( isset( $_GET['post'] ) )
    $post_id = intval( $_GET['post'] );
  elseif ( isset( $_POST['post_ID'] ) )
    $post_id = intval( $_POST['post_ID'] );
  else
    $post_id = false;
  $post_id = (int) $post_id;
  return $post_id;
}