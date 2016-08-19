 <?php 
$post    = new TimberPost();
$context = Timber::get_context();

$context['page'] = Pixelbash\Page::get();

Timber::render('page.twig', $context);
