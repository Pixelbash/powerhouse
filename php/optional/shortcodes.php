<?php

//loop to product our shortcodes
//note function needs > php 5.3

for($i = 1;$i <= 12;$i++) {
	add_shortcode("span{$i}", function($atts, $content = null, $i) {
		$content = apply_filters('the_content', $content);
		return "<div class='{$i}'>{$content}</div>";
	});
}
add_shortcode("row", function($atts, $content = null) {
	$content = apply_filters('the_content', $content);
	return "<div class='span-row clearfix'>{$content}</div>";
});

