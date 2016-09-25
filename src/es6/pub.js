import Layout from './pub/layout';
import Page from './pub/page';
import Header from './pub/header';
import Footer from './pub/footer';
import Home from './pub/home';
import Elements from './pub/elements';

export default class Pub {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    
    this.layout = new Layout(main, utils);
    this.header = new Header(main, utils);
    this.footer = new Footer(main, utils);
    this.elements = new Elements(main, utils);

    //Template specific tests
    if($('body[data-template="page-index"]').length > 0) this.home = new Home(main, utils);
  }
} 