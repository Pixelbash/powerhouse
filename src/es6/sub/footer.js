export default class Landing {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    radio('action/footer').subscribe((data) => {this.footer(data);});
  }

  footer(data) {
  }
}    