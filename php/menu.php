<?php

namespace Pixelbash;

class Menu {
  //main menu array generator
  static function get($name = 'header') {
    $links = array();

      //Get nav menu id by name
    $menu_name = $name;
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

        //Handle 2 level menus this way
        if($item->menu_item_parent == "0") {
          //Create item if not exist
          if(!isset($links[$item->ID])) {
            $links[$item->ID] = [];
            $links[$item->ID]['children'] = false;
          }

          //Add details to item
          $links[$item->ID]['title'] = $item->title;
          $links[$item->ID]['href']  = $item->url;
          $links[$item->ID]['class'] = $active;
        } else {
          //Create parent item if not exist
          if(!isset($links[$item->menu_item_parent])) {
            $links[$item->menu_item_parent] = [];
            $links[$item->menu_item_parent]['children'] = [];
          }

          //Add item to parent
          $links[$item->menu_item_parent]['children'][] = [
            'title' => $item->title,
            'href'  => $item->url,
            'class' => $active
          ];
        }
      }
    }

    return $links;
  }
}
