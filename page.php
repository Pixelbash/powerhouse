 <?php 
/*
 * Page template: Generic
 */

$context = Timber::get_context();
$post    = new TimberPost();

$context['page'] = Pixelbash\Page::get($post->ID);

Timber::render('pages/generic.twig', $context);
