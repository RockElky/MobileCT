import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'Attributes',
  templateUrl: 'Attributes.html'
})
export class Attributes {
private AttrPoints = 4;
  constructor(public navCtrl: NavController) {

  
  }
  increment() {
    this.AttrPoints++;
  }
  decrement()
  {
    this.AttrPoints--;
  }
}