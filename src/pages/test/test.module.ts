import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { Home1Page } from '../home1/home1';

@NgModule({
  declarations: [
    TestPage,
    Home1Page

  ],
  imports: [
    IonicPageModule.forChild(TestPage),
  ],
})
export class TestPageModule {}
