Powerhouse Theme for Wordpress
===
Powerhouse is a killer theme for creating websites like a demon with a minimum of fuss.

Some standout features:
- TWIG: Templating courtesy of Timber
- PHP: SimpleImage (GD) based image resizer with image caching
- PHP: Automagic php library management using git submodules
- BOWER: Automagic Javascript library management
- JS: RequireJS scripting framework
- JS: All theme options as json in header (for use with scripts)
- LESS: Powerful framework with a fully customisable grid system
- LESS: Automatic css compilation and caching
- WP: Powerful custom post type generator
- WP: Powerful custom metabox generator
- WP: Custom pagination generator (optional)
- WP: Grid system shortcodes (optional)
- WP: Post view count functions (optional)


Todo
---
- Automatically pull bower scripts with RequireJS
- Hooks to fix submodule plugin scripted paths


Requirements
---
- Timber Wordpress Plugin (theming)
- Git   (optional)
- Bower (optional)


Recommended Wordpress plugins
---
- SEO by Yoast
- Total Cache
- Better WP Security


21-01-2014
---
- Use bower to manage javascript libraries
- RequireJS for javascript modularity
- Use Timber for Twig themes
- Added sub-libraries as git submodules for easy version management
- Uses wp-less framework
- Changed name to powerhouse

	
17-09-13
---

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