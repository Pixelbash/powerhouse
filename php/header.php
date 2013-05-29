<?php

function getOptions() {
	//all the other js related theme options compile here
	$options = array(
		'turl' => get_bloginfo('template_url'),
		'opts' => get_option('argomento_options')
	);

	return stripslashes(json_encode($options));
}

