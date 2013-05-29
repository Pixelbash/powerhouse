 <?php 

$options = get_option('freshconcept_options');

$title = get_the_title();
$content = apply_filters('the_content', get_the_content());

get_header() ?>

<section class="content-wrap">
	<section class="content content-page clearfix">
		<div class="title">
			<h1><?php echo $title ?></h1>
		</div>
		<section>
			<?php echo $content ?>
		</section>
	</section>
</section>
<?php get_footer() ?>