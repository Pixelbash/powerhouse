## Powerhouse Theme for Wordpress
===
Do you like Twig templating? Less? RequireJS? Bower? Making powerful wordpress websites really really quickly? Not having to have an ice cold shower when it's time to maintain an old site of yours?

Then you might want to check this out.

- Twig Templating courtesy of Timber
- SimpleImage (GD) based image resizer with image caching
- Automagic php library management using git submodules
- Automagic Bower Javascript library management
- RequireJS scripting framework
- All theme options as json in header (for use with scripts)
- Powerful Less framework with a fully customisable grid system
- Automatic less->css compilation and caching
- Powerful custom post type generator
- Powerful custom metabox generator
- Custom pagination generator (optional)
- Grid system shortcodes (optional)
- Post view count functions (optional)


### Todo
----
- Automatically include bower scripts with RequireJS


### Installation
----
1. Install Timber plugin (the one with 5 stars)
2. cd path/to/wordpress/wp-content/themes;
3. git clone --recursive https://github.com/Pixelbash/powerhouse.git;
4. cd powerhouse;
5. bower install; # To include the latest javascript libraries
6. Set powerhouse as your theme
7. Get to it!


### Requirements
----
- Timber Wordpress Plugin (twig templates)
- Bower (js dependency management)
- Git   (repository management)


### Recommended Wordpress plugins
----
- SEO by Yoast
- Total Cache
- Better WP Security


### 26-05-2014
----
- Replaced LESS structure with something more organised
- Moved JS libraries into separate sub folder
- Added social icons
- Added a paginated image gallery function
- Added an ajax example
- Added an example of featured image validation
- Added Page specific metaboxes
- Tweaked requireJS framework
- Tweaked default post settings


### 21-01-2014
----
- Use bower to manage javascript libraries
- RequireJS for javascript modularity
- Use Timber for Twig themes
- Added sub-libraries as git submodules for easy version management
- Uses wp-less framework
- Changed name to powerhouse

	
### 17-09-13
----
- Added: Theme now uses less.js for simpler development
- Added: Nice pagination function
- Updated: Switched out options framework
- Updated: Moved little used /php/ files into their own folder
- Updated: Tidied up header.php
- Updated: Tidied up scripts.php
- Removed: Leftover icons
- Removed: Javascripts, they should be updated on load anyway
- Removed: Bootstrap
- Removed: Compiled style.css
