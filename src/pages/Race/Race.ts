import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../MainPage/MainPage';
import { Attributes } from '../Attributes/Attributes';


@Component({
  selector: 'Race',
  templateUrl: 'Race.html'
})


export class Race {

  public races: any[];
  public contents: any[];
  public selectContents: any[];
  
  public sRace: any;

  constructor(public navCtrl: NavController) {
    this.selectRace();
    this.raceContent();
  }
  selectRace() {
    this.races = [
      { id: 1, name: 'Human' },
      { id: 2, name: 'Lizard' },
      { id: 3, name: 'Alien' },
      { id: 4, name: 'Clown' }
    ];
  }
  raceContent() {
    this.contents =[
      { id: 1, content: 'Human Stuff', race_id: 1, race_name: 'Human' },
      { id: 2, content: 'Lizard Stuff', race_id: 2, race_name: 'Lizard'},
      { id: 3, content: 'Alien Stuff', race_id: 3, race_name: 'Alien'},
      { id: 4, content: 'Clown Stuff', race_id: 4, race_name: 'Clown'}
    ];
  }
  setRaceContent(sRace) {
    console.log(sRace)
    this.selectContents = this.contents.filter(content => content.race_id == sRace.id);
  }
  Attributes() {
   this.navCtrl.setRoot(Attributes);
  }
   MainPage() {
   this.navCtrl.setRoot(MainPage);
  }
}