import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { AttrAndChars } from '../AttrAndChars/AttrAndChars';

@Component({
  selector: 'page-MainPage',
  templateUrl: 'MainPage.html'
})
export class MainPage {
  constructor(public navCtrl: NavController) {
    
  }
  AttrAndChars() {
   this.navCtrl.setRoot(AttrAndChars);
  }
  
}
