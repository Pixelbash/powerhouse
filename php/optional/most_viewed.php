<?php

// function to display number of posts.
function getPostViews($postID){
  $count_key = 'JS_post_views_count';
  $count = get_post_meta($postID, $count_key, true);
  if($count==''){
      delete_post_meta($postID, $count_key);
      add_post_meta($postID, $count_key, '0');
      return "0 View";
  }
  return $count.' Views';
}

// function to count views.
function setPostViews($postID) {
  $count_key = 'JS_post_views_count';
  $count = get_post_meta($postID, $count_key, true);
  if($count==''){
    $count = 0;
    delete_post_meta($postID, $count_key);
    add_post_meta($postID, $count_key, '0');
  } else {
    $count++;
    update_post_meta($postID, $count_key, $count);
  }
}


// Add it to a column in WP-Admin
add_filter('manage_posts_columns', 'jsSetPostViews');
add_action('manage_posts_custom_column', 'jsSetPostViewsColumn',5,2);

function jsSetPostViews($defaults){
  $defaults['post_views'] = __('Views');
  return $defaults;
}

function jsSetPostViewsColumn($column_name, $id){
	if($column_name === 'post_views'){
    echo getPostViews(get_the_ID());
  }
}