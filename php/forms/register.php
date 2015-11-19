<?php

function getExampleForm() {
  //set up our form
  $form = array(
    'r_fname' => array(
      'error'    => 'Please fill in your first name',
      'validate' => true
    ),
    'r_lname' => array(
      'error'    => 'Please fill in your last name',
      'validate' => true
    ),
    'r_email' => array(
      'error'    => 'Please check your email',
      'email'    => 'Please enter a valid email address',
      'validate' => true
    )
  );

  //set up our message
  $template = ""
    . "Name: %s %s \n"
    . "Email: %s \n";

  //set up our email variables
  $options = get_option('powerhouse');
  $to = "{$options['register_to_name']}<{$options['register_to_address']}>";

  $message = array(
    'to'       => $to,
    'subject'  => 'Example',
    'template' => $template,
    'headers'  => array(
      'From: Noreply <noreply@example.com>',
    )
  );

  $handler = new JSForm(array(
    'form'    => $form,
    'message' => $message,
  ));

  return $handler->results;

}