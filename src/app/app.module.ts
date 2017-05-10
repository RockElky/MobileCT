import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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
import { Race } from '../pages/Race/Race';
import { Characteristics } from '../pages/Characteristics/Characteristics';



@NgModule({
  declarations: [
    MyApp,
    MainPage,
    AdvAndAchieve,
    Attributes,
    Combat,
    Details,
    FullSheet,
    Gear,
    Journal,
    Lore,
    QualsAndTals,
    Rules,
    Skills,
    Race,
    Characteristics,
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
    Attributes,
    Combat,
    Details,
    FullSheet,
    Gear,
    Journal,
    Lore,
    QualsAndTals,
    Rules,
    Skills,
    Race,
    Characteristics,
    Tager
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
