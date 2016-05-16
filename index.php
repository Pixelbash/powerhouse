<?php 

$context = Timber::get_context();
$post    = new TimberPost();

$context['posts']   = Pixelbash\Post::find([
  'posts_per_page' => 2
]);

Timber::render('index.twig', $context);
