import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Race } from '../Race/Race';

@Component({
  selector: 'page-MainPage',
  templateUrl: 'MainPage.html'
})
export class MainPage {
  constructor(public navCtrl: NavController) {
    
  }
  Race() {
   this.navCtrl.setRoot(Race);
  }
  
}
