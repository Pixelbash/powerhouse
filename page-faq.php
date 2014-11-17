 <?php 
 /*
  * Template name: FAQ
  */

$post    = new TimberPost();
$context = Timber::get_context();

$context['options'] = get_option('js_options');
$context['title']   = $post->post_title;
$context['content'] = apply_filters('the_content', $post->post_content);

Timber::render('page-faq.twig', $context);
