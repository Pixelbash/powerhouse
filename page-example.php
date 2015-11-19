 <?php 
 /*
  * Template name: Example
  */

$post    = new TimberPost();
$context = Timber::get_context();

$context['options'] = get_option('js_options');
$context['title']   = $post->post_title;
$context['content'] = apply_filters('the_content', $post->post_content);

Timber::render('page-example.twig', $context);
