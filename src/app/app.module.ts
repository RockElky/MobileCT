import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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



@NgModule({
  declarations: [
    MyApp,
    MainPage,
    AdvAndAchieve,
    AttrAndChars,
    Combat,
    Details,
    FullSheet,
    Gear,
    Journal,
    Lore,
    QualsAndTals,
    Rules,
    Skills,
    Tager
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    AdvAndAchieve,
    AttrAndChars,
    Combat,
    Details,
    FullSheet,
    Gear,
    Journal,
    Lore,
    QualsAndTals,
    Rules,
    Skills,
    Tager
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
