import { Component } from '@angular/core';
import { Attributes } from '../Attributes/Attributes';
import { Skills } from '../Skills/Skills';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'Characteristics',
    templateUrl: 'Characteristics.html'
})
export class Characteristics {
    private AttrPoints = 4;
    constructor(public navCtrl: NavController) {
        
    }
    increment() {
        this.AttrPoints++;
    }
    decrement() {
        this.AttrPoints--;
    }

    Attributes() {
        this.navCtrl.setRoot(Attributes);
    }
    Skills() {
        this.navCtrl.setRoot(Skills);
    }
}