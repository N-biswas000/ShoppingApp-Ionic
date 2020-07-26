import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home2Page } from './home2';
import { CartPage } from '../cart/cart';

@NgModule({
  declarations: [
    Home2Page,
    CartPage
  ],
  imports: [
    IonicPageModule.forChild(Home2Page),
  ],
})
export class Home2PageModule {}
