<?php
/*
 * simpleImage.php based image resizer
 * Resize options:
    best_fit,
    adaptive_resize,
    fit_to_width,
    fit_to_height,
 *
 * - Joe Swann
 */


namespace Pixelbash;
class Image {
  static function resize($new_args = []) {
    $default_args = array(
      'id'          => false,
      'url'         => false,
      'width'       => false,
      'height'      => false,
      'resize'      => 'adaptive_resize',
      'destination' => '/cache/'
    );

    $args = array_merge($default_args, $new_args);

    if(!$args['id'] && !$args['url'])      return 'no id or path given';
    if(!$args['width'] || !$args['width']) return 'please provide a width & height';

    //get our file info
    $file_paths = false;
    if($args['id'])  $file_paths = self::pathFromID($args['id']);
    if($args['url']) $file_paths = self::pathFromURL($args['url']);

    //add more info
    $file_paths['info']         = pathinfo( $file_paths['file_path'] );
    $file_paths['extension']    = '.'. $file_paths['info']['extension'];
    $file_paths['base_file']    = $file_paths['info']['dirname'].'/'.$file_paths['info']['filename'].'.'.$file_paths['info']['extension'];
    $file_paths['no_ext_path']  = $file_paths['info']['dirname'] . $args['destination'] . $file_paths['info']['filename'];
    $file_paths['final_folder'] = $file_paths['info']['dirname'].$args['destination'];
    $file_paths['final_path']   = $file_paths['no_ext_path'].'_'.$args['resize'] .'-'.$args['width'].'x'.$args['height'].$file_paths['extension'];
    $file_paths['final_url']    = $file_paths['source_url'] . $args['destination'] . basename( $file_paths['final_path'] );

    // check if file exists
    if ( !file_exists($file_paths['base_file']) ) 
      die('no file found: '.$file_paths['base_file']);

    //check if resized file exists
    $return = false;
    $exists = false;
    $real_width  = false;
    $real_height = false;

    //make folder if doesn't exist
    if (!file_exists($file_paths['final_folder'])) {
      mkdir($file_paths['final_folder']);
    }

    //Already done this?
    if(file_exists( $file_paths['final_path'] )) {
      $exists      = true;
      
      //image might have different sizes...
      $img_size    = getimagesize( $file_paths['final_path'] );
      $real_width  = (float)$img_size[0];
      $real_height = (float)$img_size[1];
    }

    //Copy function
    if(!$exists) {
      //Copy functionality
      if($args['resize'] == 'original') {
        $exists      = true;

        //Get base image sizes
        $img_size    = getimagesize( $file_paths['base_file'] );
        $real_width  = (float)$img_size[0];
        $real_height = (float)$img_size[1];

        if(!copy($file_paths['base_file'], $file_paths['final_path']))
          die('copy failed: '.$file_paths['base_file']);

      //Resize function
      } else {
        //create our image
        $img = new \abeautifulsite\SimpleImage($file_paths['base_file']);

        //best fit
        if($args['resize'] == 'best_fit') {
          $img->best_fit($args['width'],$args['height']);

        //adaptive resize
        } elseif($args['resize'] == 'adaptive_resize') {
          $img->adaptive_resize($args['width'],$args['height']);

        //fit to width
        } elseif($args['resize'] == 'fit_to_width') {
          $img->fit_to_width($args['width']);

        //fit to height
        } elseif($args['resize'] == 'fit_to_height') {
          $img->fit_to_height($args['height']);

        //fit to height
        } elseif($args['resize'] == 'resize') {
          $img->resize($args['height']);
        } 

        //update our width and height with new
        $real_width  = (float)$img->get_width();
        $real_height = (float)$img->get_height();

        $quality = (isset($args['quality'] )) ? $args['quality'] : 90;

        //save our image
        $img->save($file_paths['final_path'],$quality);
      }
    }

    //Create padding for use with css spacers
    $real_padding = (($real_height/$real_width) * 100) . "%";

    return array(
      'url'    => $file_paths['final_url'],
      'width'  => $real_width,
      'height' => $real_height,
      'padding' => $real_padding
    );
  }

  private static function pathFromID($att_id = false) {
    return array(
      'image_src'  => wp_get_attachment_image_src( $att_id, 'full' ),
      'file_path'  => get_attached_file( $att_id ),
      'source_url' => dirname(wp_get_attachment_url( $att_id ))
    );  
  }

  private static function pathFromURL($img_url = false) {
    $file_path = parse_url( $img_url );
    $file_path = $_SERVER['DOCUMENT_ROOT'] . $file_path['path'];

    $orig_size     = getimagesize( $file_path );
    $image_src     = array($img_url, $orig_size[0], $orig_size[1]);
    $orig_url_path = dirname($image_src[0]);

    return array(
      'image_src'  => $image_src,
      'file_path'  => $file_path,
      'source_url' => $orig_url_path
    );  
  }

  static function find($options = []) {
    $defaults = array(
      'image_ids' => [], 
      'x_size' => 100, 
      'y_size' => 100, 
      'resize' => 'adaptive_resize'
      );

    $settings = array_merge($defaults, $options);
    $image_ids = $settings['image_ids'];

    $images = [];
    $j = 0;
    if(!empty($image_ids)) {
      foreach ( $image_ids as $id ) {
        $attmeta = get_attachment($id);
        $image   = self::resize( array(
          'id'     => $id,
          'width'  => $settings['x_size'],
          'height' => $settings['y_size'],
          'resize' => $settings['resize']
          ) ); 

        $images[$j] = array(
          'id'     => $j,
          'href'   => $image['url'],
          'width'  => $image['width'],
          'height' => $image['height'],
          'meta'   => $attmeta
          );
        $j++;
      }
    } else {
      $images = false;
    }

    return $images;
  }

  static function paginated($options = []) {
    $results = false;
    $defaults = array(
      'ids' => [],
      'page' => 1,
      'page_size' => 50,
      'images' => array(
        'x_size' => 100, 
        'y_size' => 100, 
        'resize' => 'adaptive_resize'
        )
      );

    $settings = array_merge($defaults, $options);

    //process image_ids to get
    $ids    = $settings['ids'];
    $page   = $settings['page'] - 1;
    $size   = $settings['page_size'];
    $length = $settings['page_size'];
    $offset = $page * $size;

    if(!empty($ids)) {
      $image_ids = array_slice($ids, $offset, $length);

      $results = array(
        'page'   => $page,
        'offset' => $offset,
        'size'   => $size,
        'count'  => sizeof($image_ids),
        'images' => self::find(array(
          'image_ids' => $image_ids, 
          'x_size' => $settings['images']['x_size'], 
          'y_size' => $settings['images']['y_size'], 
          'resize' => $settings['images']['resize'],
          ))
        );
    }

    return $results;
  }
}
