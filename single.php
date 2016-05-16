<?php

$context = Timber::get_context();

$context['post'] = Pixelbash\Post::get();

Timber::render('post.twig', $context);
