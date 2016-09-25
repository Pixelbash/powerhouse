import Helpers from './utils/helpers/helpers';
import Hash from './utils/helpers/hash';

import Preload from './utils/preload/preload';
import Window from './utils/window/pub';
import Newsletter from './utils/newsletter/mailchimp';
import Fixes from './utils/helpers/fixes';
import Lightbox from './utils/lbox/legacy';

export default class Utils {
  constructor() {

    this.fixes      = new Fixes(); 
    this.preload    = new Preload();
    this.newsletter = new Newsletter();
    this.helpers    = new Helpers();
    this.hash       = new Hash(); 
    this.lightbox   = new Lightbox();
    this.window     = new Window();
  }
}