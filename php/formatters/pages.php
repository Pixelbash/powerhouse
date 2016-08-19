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

    $thumb_id = get_post_thumbnail_id($post->ID);
    $image = Image::resize([
      'id'     => $thumb_id,
      'width'  => 800,
      'height' => 800,
      'resize' => 'best_fit'
    ]);

    $post_data = array(
     'id'      => $post->ID,
     'title'   => $post->post_title,
     'excerpt' => $post->post_excerpt,
     'content' => apply_filters('the_content',$post->post_content),
     'href'    => get_permalink(),
     'image'   => $image,
     'subtitle' => $post->js_page_subtitle,
     'people'   => $post->js_contact_person,
     'contacts'   => $post->js_contact_details,
   );

    return $post_data;
  }
}
