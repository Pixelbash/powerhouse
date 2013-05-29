<?php
/*
 * 
 * Require the framework class before doing anything else, so we can use the defined urls and dirs
 * Also if running on windows you may have url problems, which can be fixed by defining the framework url first
 *
 */
//define('NHP_OPTIONS_URL', site_url('path the options folder'));
if(!class_exists('NHP_Options')){
	require_once( dirname( __FILE__ ) . '/options/options.php' );
}

/*
 * 
 * Custom function for filtering the sections array given by theme, good for child themes to override or add to the sections.
 * Simply include this function in the child themes functions.php file.
 *
 * NOTE: the defined constansts for urls, and dir will NOT be available at this point in a child theme, so you must use
 * get_template_directory_uri() if you want to use any of the built in icons
 *
 */
function add_another_section($sections){
	
	//$sections = array();
	$sections[] = array(
				'title' => __('A Section added by hook', 'nhp-opts'),
				'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
				//You dont have to though, leave it blank for default.
				'icon' => trailingslashit(get_template_directory_uri()).'options/img/glyphicons/glyphicons_062_attach.png',
				//Lets leave this as a blank section, no options just some intro text set above.
				'fields' => array()
				);
	
	return $sections;
	
}//function
//add_filter('nhp-opts-sections-freshconcept', 'add_another_section');


/*
 * 
 * Custom function for filtering the args array given by theme, good for child themes to override or add to the args array.
 *
 */
function change_framework_args($args){
	
	//$args['dev_mode'] = false;
	
	return $args;
	
}//function
//add_filter('nhp-opts-args-freshconcept', 'change_framework_args');

/*
 * This is the meat of creating the optons page
 *
 * Override some of the default values, uncomment the args and change the values
 * - no $args are required, but there there to be over ridden if needed.
 *
 *
 */

function setup_framework_options(){
$args = array();

//Set it to dev mode to view the class settings/info in the form - default is false
$args['dev_mode'] = true;

//google api key MUST BE DEFINED IF YOU WANT TO USE GOOGLE WEBFONTS
//$args['google_api_key'] = '***';

//Remove the default stylesheet? make sure you enqueue another one all the page will look whack!
//$args['stylesheet_override'] = true;

//Add HTML before the form
$args['intro_text'] = __('<p>This is the HTML which can be displayed before the form, it isnt required, but more info is always better. Anything goes in terms of markup here, any HTML.</p>', 'nhp-opts');

//Setup custom links in the footer for share icons
$args['share_icons']['twitter'] = array(
										'link' => 'http://twitter.com/lee__mason',
										'title' => 'Folow me on Twitter', 
										'img' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_322_twitter.png'
										);
$args['share_icons']['linked_in'] = array(
										'link' => 'http://uk.linkedin.com/pub/lee-mason/38/618/bab',
										'title' => 'Find me on LinkedIn', 
										'img' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_337_linked_in.png'
										);

//Choose to disable the import/export feature
//$args['show_import_export'] = false;

//Choose a custom option name for your theme options, the default is the theme name in lowercase with spaces replaced by underscores
$args['opt_name'] = 'freshconcept_options';

//Custom menu icon
//$args['menu_icon'] = '';

//Custom menu title for options page - default is "Options"
$args['menu_title'] = __('Theme Options', 'nhp-opts');

//Custom Page Title for options page - default is "Options"
$args['page_title'] = __('Argomento Theme Options', 'nhp-opts');

//Custom page slug for options page (wp-admin/themes.php?page=***) - default is "nhp_theme_options"
$args['page_slug'] = 'nhp_theme_options';

//Custom page capability - default is set to "manage_options"
//$args['page_cap'] = 'manage_options';

//page type - "menu" (adds a top menu section) or "submenu" (adds a submenu) - default is set to "menu"
//$args['page_type'] = 'submenu';

//parent menu - default is set to "themes.php" (Appearance)
//the list of available parent menus is available here: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
//$args['page_parent'] = 'themes.php';

//custom page location - default 100 - must be unique or will override other items
$args['page_position'] = 98;

//Custom page icon class (used to override the page icon next to heading)
//$args['page_icon'] = 'icon-themes';

//Want to disable the sections showing as a submenu in the admin? uncomment this line
//$args['allow_sub_menu'] = false;
		
//Set ANY custom page help tabs - displayed using the new help tab API, show in order of definition		
$args['help_tabs'][] = array(
							'id' => 'nhp-opts-1',
							'title' => __('Theme Information 1', 'nhp-opts'),
							'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'nhp-opts')
							);
$args['help_tabs'][] = array(
							'id' => 'nhp-opts-2',
							'title' => __('Theme Information 2', 'nhp-opts'),
							'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'nhp-opts')
							);

//Set the Help Sidebar for the options page - no sidebar by default										
$args['help_sidebar'] = __('<p>This is the sidebar content, HTML is allowed.</p>', 'nhp-opts');



$sections = array();

$sections[] = array(
				'title' => __('General', 'nhp-opts'), 
				'desc' => __('<p class="description"></p>', 'nhp-opts'),
				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
				//You dont have to though, leave it blank for default.
				'icon' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_063_power.png',
				//Lets leave this as a blank section, no options just some intro text set above.
				'fields' => array(/*
					array(
						'id' => 'opt_header_logo',
						'type' => 'upload',
						'title' => __('Logo upload', 'nhp-opts'), 
						'sub_desc' => __('Main header logo file', 'nhp-opts'),
						'desc' => __('Please ensure your logo is less than 800x400', 'nhp-opts')
						),*/
					)
				);

$sections[] = array(
				'title' => __('Contact page', 'nhp-opts'),
				'desc' => __('<p class="description"></p>', 'nhp-opts'),
				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
				//You dont have to though, leave it blank for default.
				'icon' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_063_power.png',
				//Lets leave this as a blank section, no options just some intro text set above.
				'fields' => array(/*
					array(
						'id' => 'opt_contact_email_name',
						'type' => 'text',
						'title' => __('Email name', 'nhp-opts'), 
						'sub_desc' => __('Name for the contact form to send to', 'nhp-opts'),
						'args' => array()//uses get_pages
						),
					array(
						'id' => 'opt_contact_email_address',
						'type' => 'text',
						'title' => __('Email address', 'nhp-opts'), 
						'sub_desc' => __('Email address for the contact form to send to', 'nhp-opts'),
						'args' => array()//uses get_pages
						),*/
					)
				);

$sections[] = array(
				'title' => __('Offsite details', 'nhp-opts'),
				'desc' => __('<p class="description">These are the general theme options, you can upload your logo here.</p>', 'nhp-opts'),
				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
				//You dont have to though, leave it blank for default.
				'icon' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_063_power.png',
				//Lets leave this as a blank section, no options just some intro text set above.
				'fields' => array(
					/*
					array(
						'id' => 'opt_social_twitter_link',
						'type' => 'text',
						'title' => __('Twitter link', 'nhp-opts'), 
						'sub_desc' => __('Link to your twitter account', 'nhp-opts'),
						'args' => array()//uses get_pages
						),
						*/
					array(
						'id' => 'opt_social_facebook_link',
						'type' => 'text',
						'title' => __('Facebook link', 'nhp-opts'), 
						'sub_desc' => __('Link to your facebook account', 'nhp-opts'),
						'args' => array()//uses get_pages
						),
					/*
					array(
						'id' => 'opt_social_pinterest_link',
						'type' => 'text', 
						'title' => __('Pinterest link', 'nhp-opts'), 
						'sub_desc' => __('Link to your pinterest account', 'nhp-opts'),
						'args' => array()//uses get_pages
						),
					array(
						'id' => 'opt_social_newsletter_enable',
						'type' => 'checkbox',
						'title' => __('Enable Newsletter', 'nhp-opts'), 
						'sub_desc' => __('Enable the collection of visitor details', 'nhp-opts'),
						'args' => array()//uses get_pages
						),
						*/
					)
				);

				
	$tabs = array();
			
	if (function_exists('wp_get_theme')){
		$theme_data = wp_get_theme();
		$theme_uri = $theme_data->get('ThemeURI');
		$description = $theme_data->get('Description');
		$author = $theme_data->get('Author');
		$version = $theme_data->get('Version');
		$tags = $theme_data->get('Tags');
	}else{
		$theme_data = get_theme_data(trailingslashit(get_stylesheet_directory()).'style.css');
		$theme_uri = $theme_data['URI'];
		$description = $theme_data['Description'];
		$author = $theme_data['Author'];
		$version = $theme_data['Version'];
		$tags = $theme_data['Tags'];
	}	

	$theme_info = '<div class="nhp-opts-section-desc">';
	$theme_info .= '<p class="nhp-opts-theme-data description theme-uri">'.__('<strong>Theme URL:</strong> ', 'nhp-opts').'<a href="'.$theme_uri.'" target="_blank">'.$theme_uri.'</a></p>';
	$theme_info .= '<p class="nhp-opts-theme-data description theme-author">'.__('<strong>Author:</strong> ', 'nhp-opts').$author.'</p>';
	$theme_info .= '<p class="nhp-opts-theme-data description theme-version">'.__('<strong>Version:</strong> ', 'nhp-opts').$version.'</p>';
	$theme_info .= '<p class="nhp-opts-theme-data description theme-description">'.$description.'</p>';
	$theme_info .= '<p class="nhp-opts-theme-data description theme-tags">'.__('<strong>Tags:</strong> ', 'nhp-opts').implode(', ', $tags).'</p>';
	$theme_info .= '</div>';



	$tabs['theme_info'] = array(
					'icon' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_195_circle_info.png',
					'title' => __('Theme Information', 'nhp-opts'),
					'content' => $theme_info
					);
	
	if(file_exists(trailingslashit(get_stylesheet_directory()).'README.html')){
		$tabs['theme_docs'] = array(
						'icon' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_071_book.png',
						'title' => __('Documentation', 'nhp-opts'),
						'content' => nl2br(file_get_contents(trailingslashit(get_stylesheet_directory()).'README.html'))
						);
	}//if

	global $NHP_Options;
	$NHP_Options = new NHP_Options($sections, $args, $tabs);

}//function
add_action('init', 'setup_framework_options', 0);

/*
 * 
 * Custom function for the callback referenced above
 *
 */
function my_custom_field($field, $value){
	print_r($field);
	print_r($value);

}//function

/*
 * 
 * Custom function for the callback validation referenced above
 *
 */
function validate_callback_function($field, $value, $existing_value){
	
	$error = false;
	$value =  'just testing';
	/*
	do your validation
	
	if(something){
		$value = $value;
	}elseif(somthing else){
		$error = true;
		$value = $existing_value;
		$field['msg'] = 'your custom error message';
	}
	*/
	
	$return['value'] = $value;
	if($error == true){
		$return['error'] = $field;
	}
	return $return;
	
}//function
?>