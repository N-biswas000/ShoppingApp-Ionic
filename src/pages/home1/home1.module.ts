import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home1Page } from './home1';
import { Home2Page } from '../home2/home2';


@NgModule({
  declarations: [
    Home1Page,
    Home2Page
  ],
  imports: [
    IonicPageModule.forChild(Home1Page),
  ],
})
export class Home1PageModule {}
