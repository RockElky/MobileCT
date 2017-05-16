import { Component } from '@angular/core';
import { Attributes } from '../Attributes/Attributes';
import { Skills } from '../Skills/Skills';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'Characteristics',
    templateUrl: 'Characteristics.html'
})
export class Characteristics {
    private ActionPoints = 4;
    private DamagePoints = 4;
    private RefPoints = 4;
    private WitPoints = 4;
    private ResiPoints = 4;
    private TenaPoints = 4;
    private OrgPoints = 4;
    private ComPoints = 4;
    private EvePoints = 4;
    private LongPoints = 4;

    constructor(public navCtrl: NavController) {

    }
    increment() {
        this.ActionPoints++;
        this.DamagePoints++;
        this.RefPoints++;
        this.WitPoints++;
        this.ResiPoints++;
        this.TenaPoints++;
        this.OrgPoints++;
        this.ComPoints++;
        this.EvePoints++;
        this.LongPoints++;
        
    }
    decrement() {
        this.ActionPoints--;
        this.DamagePoints--;
        this.RefPoints--;
        this.WitPoints--;
        this.ResiPoints--;
        this.TenaPoints--;
        this.OrgPoints--;
        this.ComPoints--;
        this.EvePoints--;
        this.LongPoints--;
    }

    Attributes() {
        this.navCtrl.setRoot(Attributes);
    }
    Skills() {
        this.navCtrl.setRoot(Skills);
    }
}