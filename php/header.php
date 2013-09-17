<?php

function getOptions() {
	//all the other js related theme options compile here
	$options = array(
		'burl' => get_bloginfo('url'),
		'turl' => get_bloginfo('template_url'),
		'opts' => get_option('optionsframework_sofresh')
	);

	return stripslashes(json_encode($options));
}

