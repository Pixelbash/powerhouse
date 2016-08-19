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
      'c_email' => array(
        'error'    => 'Please check your email',
        'email'    => 'Please enter a valid email address',
        'validate' => true
      ),
      'c_phone' => array(
        'error'    => 'Please fill in your phone number',
        'validate' => false
      ),
      'c_subject' => array(
        'error'    => 'Please enter a subject',
        'validate' => true
      ),
      'c_message' => array(
        'error'    => 'Please enter a message',
        'validate' => true
      ),
    );

    //set up our message
    $template = ""
      . "Name: %s \n\n"
      . "Phone: %s \n\n"
      . "Email: %s \n\n"
      . "Subject: %s \n\n"
      . "Message: %s";

    //set up our email variables
    $options = get_option('powerhouse');
    $to = "{$options['contact_name']}<{$options['contact_email']}>";
    $cc = "{$options['contact_cc_name']}<{$options['contact_cc_email']}>";

    $message = array(
      'to'       => $to,
      'name'     => $options['contact_name'],
      'subject'  => "New website enquiry",
      'template' => $template,
      'headers'  => array(
        'From: Contact Form <noreply@dymondmcbain.co.nz>',
        "Cc: {$cc}" 
      )
    );

    $form = new Form(array(
      'inputs'  => $input,
      'message' => $message,
    ));

    return $form->results;
  }
}
