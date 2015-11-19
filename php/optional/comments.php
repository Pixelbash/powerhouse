<?php
function jsCommentRedirect( $location )
{
    if ( isset( $_POST['my_redirect_to'] ) ) // Don't use "redirect_to", internal WP var
        return $_POST['my_redirect_to']; // You *must* sanitize or whitelist this 
    else
    	return $location;
}
add_filter( 'comment_post_redirect', 'jsCommentRedirect' );



function getComments($post_id) {
	return  get_comments( array(
    'post_id' => $post_id,
    'status' => 'approve'
  ) );
}

function getCommentForm($post_id, $redirect = false) {
	if($redirect) $my_redirect = "<input name='my_redirect_to' type='hidden' value='http://{$redirect}' />"; 

	$comment_author = esc_attr( $commenter['comment_author'] );
	$comment_label = __( 'Name' );

	$author = <<<EOT
	<div class="comment-form-wrap clearfix">
	<div class="comment-form-details">
	<h3>Reply</h3>
	<p class="comment-form-author">
		<input id="author" name="author" type="text" value="{$comment_author}" placeholder="{$comment_label}" size="30" {$aria_req} />
	</p>
EOT;

	$email_label = __( 'Email' );
	$comment_email = esc_attr(  $commenter['comment_author_email'] );

	$email = <<<EOT
	<p class="comment-form-email">
	<input id="email" name="email" type="text" value="{$comment_email}" placeholder="{$email_label}" size="30" {$aria_req} /></p>
	</div>
EOT;

	$website_label = __( 'Website' );
	$comment_website = esc_attr(  $commenter['comment_author_website'] );

	$website = <<<EOT
	<p class="comment-form-website">
	<input id="website" name="website" type="text" value="{$comment_website}" placeholder="{$website_label}" size="30" {$aria_req} /></p>
	
EOT;

	$fields =  array(
		'author' => $author,
		'website'  => $website,
		'email'  => $email,
	);

	$comment_field = <<<EOT
	{$my_redirect}
	<div class="comment-form-message">
		<textarea id="comment" name="comment" aria-required="true"></textarea>
	</div>
EOT;


	$comment_args = array(
		'title_reply' => '',
		'comment_field' => $comment_field,
		'comment_notes_before' => '',
		'comment_notes_after' => '',
		'fields' => apply_filters( 'comment_form_default_fields', $fields )
	);

	comment_form($comment_args, $post_id); 
}