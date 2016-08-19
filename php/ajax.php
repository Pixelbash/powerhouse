<?php

/*
example functions
    - Get home page posts (json)
    - Get about page images and captions (json)


*/

// add_action('wp_ajax_formlogin', 'pixelbash_login');
// add_action('wp_ajax_nopriv_formlogin', 'pixelbash_login');

// //home feed
// function pixelbash_login() {
//     //Get variables for comparison
//   $success = false;

//   if(isset($_POST['data'])) {
//     $data = $_POST['data'];

//     if(isset($data['building']) && isset($data['password'])) {
//       $id       = $data['building'];
//       $pass     = $data['password'];
//       $building = Pixelbash\Building::get($id);

//           //Compare the password
//       if($building['password'] == $pass) {
//         $success = true;
//       }
//     }
//   }

//   header("HTTP/1.1 200 OK");

//   if($success) {
//     echo hash('sha256',$pass);
//   } else {
//     echo '0';
//   }
//   exit();
// }