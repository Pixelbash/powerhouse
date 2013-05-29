<?php


//Excerpts
function sofresh_auto_excerpt_more( $more ) {
	return ' &hellip;' . sofresh_continue_reading_link();
}
add_filter( 'excerpt_more', 'sofresh_auto_excerpt_more' );


//Galleries
function sofresh_remove_gallery_css( $css ) {
	return preg_replace( "#<style type='text/css'>(.*?)</style>#s", '', $css );
}
add_filter( 'gallery_style', 'sofresh_remove_gallery_css' );

//Comments
if ( ! function_exists( 'sofresh_comment' ) ) :
function sofresh_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<div id="comment-<?php comment_ID(); ?>">
		<div class="comment-author vcard">
			<?php echo get_avatar( $comment, 40 ); ?>
			<?php printf( __( '%s <span class="says">says:</span>', 'sofresh' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
		</div><!-- .comment-author .vcard -->
		<?php if ( $comment->comment_approved == '0' ) : ?>
			<em><?php _e( 'Your comment is awaiting moderation.', 'sofresh' ); ?></em>
			<br />
		<?php endif; ?>

		<div class="comment-meta commentmetadata"><a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
			<?php
				/* translators: 1: date, 2: time */
				printf( __( '%1$s at %2$s', 'sofresh' ), get_comment_date(),  get_comment_time() ); ?></a><?php edit_comment_link( __( '(Edit)', 'sofresh' ), ' ' );
			?>
		</div><!-- .comment-meta .commentmetadata -->

		<div class="comment-body"><?php comment_text(); ?></div>

		<div class="reply">
			<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
		</div><!-- .reply -->
	</div><!-- #comment-##  -->

	<?php
			break;
		case 'pingback'  :
		case 'trackback' :
	?>
	<li class="post pingback">
		<p><?php _e( 'Pingback:', 'sofresh' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __('(Edit)', 'sofresh'), ' ' ); ?></p>
	<?php
			break;
	endswitch;
}
endif;

function sofresh_remove_recent_comments_style() {
	global $wp_widget_factory;
	remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}
add_action( 'widgets_init', 'sofresh_remove_recent_comments_style' );


//Widgets
function sofresh_widgets_init() {
	register_sidebar( array(
		'name' => __( 'Footer Widgets 1', 'sofresh' ),
		'id' => 'footer-widgets-1',
		'description' => __( 'The first footer sidebar', 'sofresh' ),
		'before_widget' => '<div id="%1$s" class="span4 widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
	register_sidebar( array(
		'name' => __( 'Footer Widgets 2', 'sofresh' ),
		'id' => 'footer-widgets-2',
		'description' => __( 'The first footer sidebar', 'sofresh' ),
		'before_widget' => '<div id="%1$s" class="span4 widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
	register_sidebar( array(
		'name' => __( 'Footer Widgets 3', 'sofresh' ),
		'id' => 'footer-widgets-3',
		'description' => __( 'The first footer sidebar', 'sofresh' ),
		'before_widget' => '<div id="%1$s" class="span4 widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
}

add_action( 'widgets_init', 'sofresh_widgets_init' );