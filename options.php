<?php
/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 * By default it uses the theme name, in lowercase and without spaces, but this can be changed if needed.
 * If the identifier changes, it'll appear as if the options have been reset.
 */

function optionsframework_option_name() {

	// This gets the theme name from the stylesheet
	// $themename = wp_get_theme();
	// $themename = preg_replace("/\W/", "_", strtolower($themename) );

	$optionsframework_settings = get_option( 'optionsframework' );
	$optionsframework_settings['id'] = 'powerhouse';//$themename;
	update_option( 'optionsframework', $optionsframework_settings );
}

/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the 'id' fields, make sure to use all lowercase and no spaces.
 *
 * If you are making your theme translatable, you should replace 'options_framework_theme'
 * with the actual text domain for your theme.  Read more:
 * http://codex.wordpress.org/Function_Reference/load_theme_textdomain
 */

function optionsframework_options() {

	$options = array();

	$options[] = array(
		'name' => __('Home', 'powerhouse'),
		'type' => 'heading' );

	$wp_editor_settings = array(
		'wpautop'       => false, // Default
		'textarea_rows' => 5,
		'tinymce'       => array( 'plugins' => 'wordpress' )
	);
	
	$options[] = array(
		'name'     => __('Hero', 'powerhouse'),
		'desc'     => 'This is the text that appears over the home page slideshow',
		'id'       => 'home_hero_text',
		'type'     => 'textarea'
	);
	
	$options[] = array(
		'name'     => __('Home Intro Heading', 'powerhouse'),
		'desc'     => 'Heading for home intro',
		'id'       => 'home_intro_heading',
		'type'     => 'text'
	);
	
	$options[] = array(
		'name'     => __('Home Intro Content', 'powerhouse'),
		'desc'     => 'Content for home intro',
		'id'       => 'home_intro_content',
		'type'     => 'editor',
		'settings' => $wp_editor_settings 
	);
	
	$options[] = array(
		'name'     => __('Home Intro Button', 'powerhouse'),
		'desc'     => 'Text for home button',
		'id'       => 'home_intro_button',
		'type'     => 'text'
	);
	
	$options[] = array(
		'name'     => __('Home Intro Link', 'powerhouse'),
		'desc'     => 'Link for home button',
		'id'       => 'home_intro_href',
		'type'     => 'text'
	);


	foreach([1,2,3,4,5,6] as $v) {
		$options[] = array(
			"name" => "Background slide {$v}",
			"id" => "home_hero_background{$v}",
			"type" => "upload" );
	}


	$options[] = array(
		'name' => __('Contact', 'powerhouse'),
		'type' => 'heading' );
	
	$options[] = array(
		'name'     => __('"To" Name', 'powerhouse'),
		'desc'     => 'Name the form gets sent to',
		'id'       => 'contact_name',
		'type'     => 'text' );

	$options[] = array(
		'name'     => __('"To" Email', 'powerhouse'),
		'desc'     => 'Email the form gets sent to',
		'id'       => 'contact_email',
		'type'     => 'text' );

	$options[] = array(
		'name'     => __('"CC" Name', 'powerhouse'),
		'desc'     => 'Name the form gets sent to',
		'id'       => 'contact_cc_name',
		'std'  => 'Joe S',
		'type'     => 'text' );

	$options[] = array(
		'name'     => __('"CC" Email', 'powerhouse'),
		'desc'     => 'Email the form gets sent to',
		'id'       => 'contact_cc_email',
		'std'  => 'joe@pixelbash.co.nz',
		'type'     => 'text' );

	return $options;
}
