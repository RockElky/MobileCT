import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MainPage } from '../pages/MainPage/MainPage';
import { AttrAndChars } from '../pages/AttrAndChars/AttrAndChars';
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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Main Page', component: MainPage },
      { title: 'Advancement and Achievements', component: AdvAndAchieve },
      { title: 'Attributes and Characteristics', component: AttrAndChars },
      { title: 'Combat', component: Combat },
      { title: 'Details', component: Details },
      { title: 'Full Sheet', component: FullSheet },
      { title: 'Gear', component: Gear },
      { title: 'Journal', component: Journal },
      { title: 'Lore', component: Lore },
      { title: 'Qualities and Talents', component: QualsAndTals },
      { title: 'Rules', component: Rules },
      { title: 'Skills', component: Skills },
      { title: 'Tager', component: Tager },
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
