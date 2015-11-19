<?php

//loop to produce our shortcodes
//note function needs > php 5.3

add_shortcode(
  "block", 
  function($atts, $content = null) {
  	$content = apply_filters('the_content', $content);
  	return "<div class='block'>{$content}</div>";
  }
);

