<?php
namespace Pixelbash;

class Pagination {
  static function get($query = false, $pages = '', $range = 2) {  
   global $paged;

   $showitems = ($range * 2) + 1;  

   if(empty($paged)) {
      $paged = 1;
    }

   if($pages == '')  {
      global $wp_query;
      $pages = $wp_query->max_num_pages;

      if(!$pages)  {
        $pages = 1;
      }
    }   

    $html = '';
    if($pages != 1)   {
      $html .= "<div class='pagination'>";
      if($paged > 2 && $paged > $range+1 && $showitems < $pages) $html .= "<a href='".get_pagenum_link(1)."'>&laquo;</a>";
      if($paged > 1 && $showitems < $pages) $html .= "<a href='".get_pagenum_link($paged - 1)."'>&lsaquo;</a>";

      for ($i=1; $i <= $pages; $i++) {
        if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
          $html .= ($paged == $i)? "<span class='current'>".$i."</span>":"<a href='".get_pagenum_link($i)."' class='inactive' >".$i."</a>";
        }
      }

      if ($paged < $pages && $showitems < $pages) {
        $html .= "<a href='".get_pagenum_link($paged + 1)."'>&rsaquo;</a>";  
      }
      if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) {
        $html .= "<a href='".get_pagenum_link($pages)."'>&raquo;</a>";
      }
      $html .= "</div>";
    }
    return $html;
  }
}
