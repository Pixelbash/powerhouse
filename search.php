 <?php 
 /*
  * Template name: Search
  */

$post    = new TimberPost();
$context = Timber::get_context();

global $query_string;

$query_args = explode("&", $query_string);
$search_query = array();

if( strlen($query_string) > 0 ) {
  foreach($query_args as $key => $string) {
    $query_split = explode("=", $string);
    $search_query[$query_split[0]] = urldecode($query_split[1]);
  } // foreach
} //if

$search = new WP_Query($search_query);

$posts = [];
foreach($search->posts as $p) {
  $posts[] = Pixelbash\Page::get($p->ID);
}

$context['posts'] = $posts;


Timber::render('p-search.twig', $context);
