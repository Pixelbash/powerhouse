<?php

namespace Pixelbash;
class Post {
  static function find($opts = array()) {
      //setup loop
    global $post;
    $posts = array();
    $defaults = array( 
      'order'          => 'DESC', 
      'orderby'        => 'menu_order date', 
      'post_type'      => 'post', 
      'post_status'    => 'publish',
      'posts_per_page' => 12
    );

    $args = array_merge($defaults,$opts);

    wp_reset_query(); query_posts($args); //Set up default query for pagination etc
   
    $loop = new \WP_Query( $args );

    while ( $loop->have_posts() ) {
      $loop->the_post();
      $posts[] = self::get($post->ID);
    } 

    return $posts;
  }

  static function get($id = false) {
    $post = new \TimberPost($id);

    $thumb_id = get_post_thumbnail_id($post->ID);
    $image = Image::resize([
      'id'     => $thumb_id,
      'width'  => 400,
      'height' => 300,
      'resize' => 'adaptive_resize'
    ]);


    $post_data = array(
     'id'      => $post->ID,
     'title'   => $post->post_title,
     'date'    => get_the_date( 'd/m/y' ),
     'author'  => get_the_author_meta('display_name',$post->post_author),
     'excerpt' => get_the_excerpt(),
     'content' => apply_filters('the_content', $post->post_content),
     'href'    => get_permalink(),
     'image'   => $image
   );

    return $post_data;
  }

}
