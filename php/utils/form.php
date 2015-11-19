<?php

class jsForm {
  private $submitted  = false;
  private $success    = false;
  private $has_errors = false;

  //post variables
  private $post       = array(); //post variables
  private $holder     = array(); //values for the template form
  private $errors     = array();
  private $form       = array(); //form settings and results
  private $message    = array(); //email settings
  public  $results    = array(); //template variables
  
  function __construct($settings) {
    //get our settings
    $this->post    = $_POST;
    $this->form    = $settings['form'];
    $this->message = $settings['message'];

    //set up our form
    foreach ($this->form as $key => $item){
      $var = (isset($this->post[$key])) ? $this->post[$key] : false;

      $this->form[$key]['var'] = $var;
      $this->holder[$key]      = $var;
      $this->errors[$key]      = false;
    }

    //run our class if we are submitting the form
    if($this->form['submit']['var']){
      $this->submitted = true;
      $this->init();
    }
  }

  function init() {
    //run our validation engine
    $this->validate();

    //control structure
    if(!$this->has_errors) {
      $this->send_email();
    }

    //set our template variables
    $this->holder();

    //set up our public variables
    $this->results = array(
      'success' => $this->success,
      'errors'  => $this->errors,
      'holder'  => $this->holder,
    );
  }

  function validate() {
    //foreach input
    foreach ($this->form as $key => $item){


      //if empty
      if(!$item['var'] && $item['validate'] == true) {

        $this->errors[$key] = "<div class='error'>{$item['error']}</div>";
        $this->has_errors   = true;

      //if not empty but still wrong
      } elseif( $item['var'] && $item['validate'] == true ) {

        //validate email addresses
        if($key == 'r_email'){
          if(!preg_match("^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$^", $item['var'])) {
            $this->errors[$key] = "<div class='error'>{$item['email']}</div>";
            $this->has_errors   = true;
          }
        }
      }
    }
  }

  function send_email() {
    $email_subject = $this->message['subject'];
    $email_to      = $this->message['to'];
    $email_headers = $this->message['headers'];
    $email_name    = $this->form['r_fname']['var'];
    $email_message = vsprintf($this->message['template'], $this->holder);

    if(wp_mail( $email_to, $email_subject, $email_message, $email_headers )) {
      error_log("Enquiry sent to {$email_to}");
    } else {
      error_log("Enquiry failed to {$email_to}");
    }

    $this->success = true;
  }

  function holder() {
    if($this->success) {
      foreach ($this->form as $key => $item){
        $this->holder[$key]   = '';
      }
    }
  }
}