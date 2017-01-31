import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MainPage } from '../pages/MainPage/MainPage';
import { Attributes } from '../pages/Attributes/Attributes';
import { Combat } from '../pages/Combat/Combat';
import { Details } from '../pages/Details/Details';
import { FullSheet } from'../pages/FullSheet/FullSheet';
import { AdvAndAchieve } from '../pages/AdvAndAchieve/AdvAndAchieve'
import { Gear } from '../pages/Gear/Gear';
import { Journal } from '../pages/Journal/Journal';
import { Lore } from '../pages/Lore/Lore';
import { QualsAndTals } from '../pages/QualsAndTals/QualsAndTals';
import { Rules } from '../pages/Rules/Rules';
import { Skills } from '../pages/Skills/Skills';
import { Tager } from '../pages/Tager/Tager';
import { Race } from '../pages/Race/Race'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Attributes;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Main Page', component: MainPage },
      { title: 'Race', component: Race },
      { title: 'Attributes', component: Attributes },
      { title: 'Skills', component: Skills },
      { title: 'Qualities and Talents', component: QualsAndTals },
      { title: 'Tager', component: Tager },
      { title: 'Advancement and Achievements', component: AdvAndAchieve },
      { title: 'Gear', component: Gear },
      { title: 'Combat', component: Combat },
      { title: 'Details', component: Details },
      { title: 'Journal', component: Journal },
      { title: 'Full Sheet', component: FullSheet },
      { title: 'Rules', component: Rules },
      { title: 'Lore', component: Lore },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
