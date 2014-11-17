<?php
//include_once TEMPLATEPATH . 'lib/metabox/meta-box-3.2.2.class.php';
//include TEMPLATEPATH . 'lib/metabox/meta-box-usage.php';


/**
 * Registering meta boxes
 *
 * All the definitions of meta boxes are listed below with comments.
 * Please read them CAREFULLY.
 *
 * You also should read the changelog to know what has been changed before updating.
 *
 * For more information, please visit:
 * @link http://www.deluxeblogtips.com/meta-box/docs/define-meta-boxes
 */

/********************* META BOX DEFINITIONS ***********************/

$prefix = 'JS_';

global $meta_boxes;

$meta_boxes = array();
$meta_boxes[] = array(
  'title'  => __( 'Testimonial Details', 'rwmb' ),
  'pages'  => array('testimonial'),
  'fields' => array(
    array(
      'name'  => __( 'Attribution', 'rwmb' ),
      'id'    => "{$prefix}attribution",
      'desc'  => __( 'Whos testimonial is this?', 'rwmb' ),
      'type'  => 'text',
    ),
    array(
      'name'  => __( 'Testimonial', 'rwmb' ),
      'id'    => "{$prefix}testimonial",
      'desc'  => __( 'What did they say?', 'rwmb' ),
      'type'  => 'textarea',
    ),
  ),
  'validation' => array(
    'rules' => array(
      "{$prefix}testimonial" => array(
        'required'  => true,
      ),
      "{$prefix}cite" => array(
        'required'  => true,
      ),
    ),
  ),
);


/********************* META BOX REGISTERING ***********************/

/**
 * Register meta boxes
 *
 * @return void
 */
function rw_register_meta_boxes()
{
        global $meta_boxes;

        // Make sure there's no errors when the plugin is deactivated or during upgrade
        if ( class_exists( 'RW_Meta_Box' ) ) {
                foreach ( $meta_boxes as $meta_box ) {
                        if ( isset( $meta_box['only_on'] ) && ! rw_maybe_include( $meta_box['only_on'] ) ) {
                                continue;
                        }

                        new RW_Meta_Box( $meta_box );
                }
        }
}

add_action( 'admin_init', 'rw_register_meta_boxes' );

/**
 * Check if meta boxes is included
 *
 * @return bool
 */
function rw_maybe_include( $conditions ) {
        // Include in back-end only
        if ( ! defined( 'WP_ADMIN' ) || ! WP_ADMIN ) {
                return false;
        }

        // Always include for ajax
        if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
                return true;
        }

        if ( isset( $_GET['post'] ) ) {
                $post_id = $_GET['post'];
        }
        elseif ( isset( $_POST['post_ID'] ) ) {
                $post_id = $_POST['post_ID'];
        }
        else {
                $post_id = false;
        }

        $post_id = (int) $post_id;
        $post    = get_post( $post_id );

        foreach ( $conditions as $cond => $v ) {
                // Catch non-arrays too
                if ( ! is_array( $v ) ) {
                        $v = array( $v );
                }

                switch ( $cond ) {
                        case 'id':
                                if ( in_array( $post_id, $v ) ) {
                                        return true;
                                }
                        break;
                        case 'parent':
                                $post_parent = $post->post_parent;
                                if ( in_array( $post_parent, $v ) ) {
                                        return true;
                                }
                        break;
                        case 'slug':
                                $post_slug = $post->post_name;
                                if ( in_array( $post_slug, $v ) ) {
                                        return true;
                                }
                        break;
                        case 'template':
                                $template = get_post_meta( $post_id, '_wp_page_template', true );
                                if ( in_array( $template, $v ) ) {
                                        return true;
                                }
                        break;
                }
        }

        // If no condition matched
        return false;
}