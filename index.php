 <?php 
$templates = array('index.twig');
$context   = Timber::get_context();

$context['options'] = get_option('js_options');
$context['title']   = get_the_title();
$context['content'] = apply_filters('the_content', get_the_content());

Timber::render('index.twig', $context);
