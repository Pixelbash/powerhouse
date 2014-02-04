<?php

function getImages($image_ids, $x_size, $y_size, $resize = 'adaptive_resize') {
    $images = array();
    $j = 0;
    if(!empty($image_ids)) {
        foreach ( $image_ids as $id ) {
            $attmeta = get_attachment($id);
            $image   = jsImageResize( array(
                'id'     => $id,
                'width'  => $x_size,
                'height' => $y_size,
                'resize' => $resize
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

function sepiafy( $attach_id = null, $img_url = null, $width, $height, $crop = false ) {
    $image_src = wp_get_attachment_image_src( $attach_id, 'full' );
    $file_path = get_attached_file( $attach_id );
    $file_info = pathinfo( $file_path );

    $ext = $file_info['extension'];
    $extension = ".{$ext}";

    $crop_path = "{$file_info['dirname']}/{$file_info['filename']}-{$width}x{$height}{$extension}";
    $sepia_path = "{$file_info['dirname']}/sepia-{$file_info['filename']}-{$width}x{$height}{$extension}";

    $crop_url = str_replace( basename( $image_src[0] ), basename( $crop_path ), $image_src[0] );
    $sepia_url = str_replace( basename( $image_src[0] ), basename( $sepia_path ), $image_src[0] );

    if ( !file_exists( $sepia_path ) ) {
        js_resize( $attach_id , '', $width, $height, $crop );

        $img = imagecreatefromjpeg($crop_path);
        imagefilter($img,IMG_FILTER_GRAYSCALE);
        imagefilter($img,IMG_FILTER_COLORIZE,14,18,0);
        imagefilter($img,IMG_FILTER_CONTRAST, 10);
        imagefilter($img,IMG_FILTER_BRIGHTNESS, 20);
        imagejpeg($img,$sepia_path);
        imagedestroy($img); 

    }
    
    $sepia_image = array (
        'url' => $sepia_url,
        'width' => $width,
        'height' => $height
    );

    return $sepia_image;
}
