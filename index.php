<?php 

$context = Timber::get_context();
$post    = new TimberPost();

Timber::render('index.twig', $context);
