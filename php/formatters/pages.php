<?php

namespace Pixelbash;
class Page {
  static function find($opts = []) {
      //setup loop
    global $post;
    $posts = [];
    $args = array( 
      'order'          => 'DESC', 
      'orderby'        => 'menu_order', 
      'post_type'      => 'page', 
      'post_status'    => 'publish',
      'posts_per_page' => 12
    );

    wp_reset_query();
    $loop = new \WP_Query( array_merge($args,$opts) );

    while ( $loop->have_posts() ) {
      $loop->the_post();
      $posts[] = self::get($post->ID, $source);
    } 

    return $posts;
  }

  static function get($id = false, $source = false) {
    $post = new \TimberPost($id);

    $post_data = array(
     'id'          => $post->ID,
     'title'       => $post->post_title,
     'excerpt'     => $post->post_excerpt,
     'content'     => apply_filters('content',$post->post_content),
     'href'        => get_permalink()
   );

    return $post_data;
  }
}
