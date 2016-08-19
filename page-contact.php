 <?php 
 /*
  * Template name: Contact
  */

$post    = new TimberPost();
$context = Timber::get_context();

$context['page'] = Pixelbash\Page::get();

Timber::render('p-contact.twig', $context);
