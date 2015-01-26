<?php

//main menu array generator
function getMainMenu() {
    $links = array();

    //Get nav menu id by name
    $menu_name = 'primary';
    $locations = get_nav_menu_locations();
    $menu_id   = (isset($locations[$menu_name])) ? $locations[$menu_name] : 0;

    //Get nav menu items
    $items = wp_get_nav_menu_items( $menu_id, array(
        'order'                  => 'ASC',
        'orderby'                => 'menu_order',
        'post_type'              => 'nav_menu_item',
        'post_status'            => 'publish',
        'output'                 => ARRAY_A,
        'output_key'             => 'menu_order',
        'nopaging'               => true,
        'update_post_term_cache' => false )
    );

    if(!empty($items)) {
      foreach($items as $item) {
        //active class for pages, categories
        $active = false;

        if( ($item->object == 'page') && (is_page($item->object_id)) ) {
          $active = 'active';
        } 
        
        $links[$item->ID] = array(
          'title' => $item->title,
          'href'  => $item->url,
          'class' => $active
        );
      }
    }

    return $links;
}
