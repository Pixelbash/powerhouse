 <?php 
 /*
  * Template name: Columns
  */

$post    = new TimberPost();
$context = Timber::get_context();

$context['page'] = Pixelbash\Page::get();

Timber::render('p-columns.twig', $context);
