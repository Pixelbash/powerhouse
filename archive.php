<?php 

$articles = array();
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$loop = new WP_Query( $args );

while ( have_posts() ) {
	the_post();

	$article_image = jsImageResize( array(
		'id'     => get_post_thumbnail_id($post->ID),
		'width'  => 960,
		'height' => 660
	) );  

	$article_image_url = addslashes($article_image['url']);

	$articles[$post->ID] = array(
		'title'   => get_the_title(),
		'href'    => get_permalink(),
		'content' => apply_filters('the_content', get_the_content()),
		'image'   => $article_image_url
	);
} 

get_header(); ?>

<section class="content-wrap ">
	<section class="content content-page content-articles clearfix">
		<?php foreach($articles as $article) { ?>
			<article>
				<img src="<?php echo $article['image'] ?>" alt="<?php echo $article['title'] ?>">
				<h2><?php echo $article['title'] ?></h2>
			</article>
		<?php } ?>

		<?php js_pagination($loop); ?>
	</section>
</section>

<?php get_footer() ?>