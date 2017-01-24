import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Race } from '../Race/Race';

import { AttrAndChars } from '../AttrAndChars/AttrAndChars';

@Component({
  selector: 'page-MainPage',
  templateUrl: 'MainPage.html'
})
export class MainPage {
  constructor(public navCtrl: NavController) {
    
  }
  AttrAndChars() {
   this.navCtrl.setRoot(Race);
  }
  
}
