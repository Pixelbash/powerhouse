<?php

/*
example functions
    - Get home page posts (json)
    - Get about page images and captions (json)


// JSON FEEDS
add_action('wp_ajax_projectfeed', 'projectFeed');
add_action('wp_ajax_nopriv_projectfeed', 'projectFeed');

//home feed
function projectFeed() {
    $paged   = (isset($_POST['page'])) ? $_POST['page'] : 1; 
    $term    = (isset($_POST['term'])) ? $_POST['term'] : false; 

    $args = array(
      'paged' => $paged
    );

    if($term) $args['term'] = $term;

    echo json_encode(getProjects($args));
    exit();
}

*/