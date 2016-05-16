<?php

namespace Pixelbash;

class Forms {
  static function contact() {
    //set up our form
    $input = array(
      'c_name' => array(
        'error'    => 'Please fill in your name',
        'validate' => true
      ),
      'c_phone' => array(
        'error'    => 'Please fill in your phone number',
        'validate' => true
      ),
      'c_email' => array(
        'error'    => 'Please check your email',
        'email'    => 'Please enter a valid email address',
        'validate' => true
      ),
      'c_region' => array(
        'error'    => 'Please select a region',
        'validate' => true
      ),
    );

    //set up our message
    $template = ""
      . "Name: %s \n"
      . "Phone: %s \n"
      . "Email: %s \n"
      . "Region: %s \n";

    //set up our email variables
    $options = get_option('powerhouse');
    $to      = "{$options['contact_name']}<{$options['contact_email']}>";

    $message = array(
      'to'       => $to,
      'name'     => $options['contact_name'],
      'subject'  => 'New Contact Enquiry',
      'template' => $template,
      'headers'  => array(
        'From: Contact Form <noreply@powerhouse.com>',
      )
    );

    $form = new Form(array(
      'inputs'  => $input,
      'message' => $message,
    ));

    return $form->results;
  }
}
