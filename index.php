 <?php 
$context = Timber::get_context();
$post    = new TimberPost();

$context['options'] = get_option('js_options');
$context['title']   = $post->post_title;
$context['content'] = apply_filters('the_content', $post->post_content);

Timber::render('index.twig', $context);
