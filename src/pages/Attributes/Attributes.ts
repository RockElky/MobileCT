import { Component } from '@angular/core';
import { Race } from '../Race/Race';
import { Characteristics } from '../Characteristics/Characteristics';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'Attributes',
  templateUrl: 'Attributes.html'
})
export class Attributes {
  private AgiPoints = 4;
  private StrPoints = 4;
  private TenPoints = 4;
  private IntPoints = 4;
  private PerPoints = 4;
  private PresPoints = 4;
  private CoordPoints = 4;
  private BrawnPoints = 4;
  private WellPoints = 4;
  private InsPoints = 4;
  private IntuitPoints = 4;
  private CharPoints = 4;
  constructor(public navCtrl: NavController) {


  }
  increment(iagi,istr,iten,iint,iper,ipres,icoord,ibrawn,iwell,iins,iintu,ichar) {
    iagi = this.AgiPoints++;
    istr = this.StrPoints++;
    iten = this.TenPoints++;
    iint = this.IntPoints++;
    iper = this.PerPoints++;
    ipres = this.PresPoints++;
    icoord = this.CoordPoints++;
    ibrawn = this.BrawnPoints++;
   iwell = this.WellPoints++;
    iins = this.InsPoints++;
    iintu = this.IntuitPoints++;
    ichar = this.CharPoints++;
  }
  decrement(dagi,dstr,dten,dint,dper,dpres,dcoord,dbrawn,dwell,dins,dintu,dchar) {
    dagi = this.AgiPoints--;
    dstr = this.StrPoints--;
    dten = this.TenPoints--;
    dint = this.IntPoints--;
    dper = this.PerPoints--;
    dpres = this.PresPoints--;
   dcoord = this.CoordPoints--;
    dbrawn = this.BrawnPoints--;
    dwell = this.WellPoints--;
    dins = this.InsPoints--;
    dintu = this.IntuitPoints--;
    dchar = this.CharPoints--;
  }
  Characteristics() {
    this.navCtrl.setRoot(Characteristics);
  }
  Race() {
    this.navCtrl.setRoot(Race);
  }
}