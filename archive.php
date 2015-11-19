 <?php 

$context = Timber::get_context();
$post    = new TimberPost();

$context['title']   = $post->post_title;
$context['posts']   = getPosts();

Timber::render('archive.twig', $context);
