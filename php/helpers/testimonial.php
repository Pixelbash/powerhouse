<?php

function getTestimonials($opts = array()) {

    //setup loop
    global $post;
    $cur_post = $post;
    $testimonials = array();
    $args = array( 
        'order'          => 'DESC', 
        'orderby'        => 'menu_order', 
        'post_type'      => 'testimonial', 
        'post_status'    => 'publish',
        'posts_per_page' => 12
    );

    wp_reset_query();
    $loop = new WP_Query( $args );

    while ( $loop->have_posts() ) {
        $loop->the_post();
        $testimonials[] = getTestimonial($cur_post);
    } 

    return $testimonials;
}

function getTestimonial($cur_post = false) {
    $post = new TimberPost();

    $post_data = array(
        'id'          => $post->ID,
        'title'       => $post->post_title,
        'href'        => get_permalink(),
        'testimonial' => $post->JS_testimonial,
        'attribution' => $post->JS_attribution
    );

    return $post_data;
}