 <?php 

$context = Timber::get_context();
$post    = new TimberPost();

$context['posts'] = Pixelbash\Post::find();
$context['pagination'] = Timber::get_pagination();

// Important, pagination needs to come after query_posts($args);
// See Pixelbash\Post::find(); for details

Timber::render('p-posts.twig', $context);
