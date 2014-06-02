<?php

//main menu array generator
function getMainMenu() {
    $links = array();

    $items = wp_get_nav_menu_items( 2, array(
        'order'                  => 'ASC',
        'orderby'                => 'menu_order',
        'post_type'              => 'nav_menu_item',
        'post_status'            => 'publish',
        'output'                 => ARRAY_A,
        'output_key'             => 'menu_order',
        'nopaging'               => true,
        'update_post_term_cache' => false )
    );

    foreach($items as $item) {
      $links[$item->ID] = array(
        'title' => $item->post_title,
        'href'  => $item->url
      );
    }

    return $links;
}