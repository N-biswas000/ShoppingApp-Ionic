import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/home/Login';
import { TestPage } from '../pages/test/test';
import { Home1Page } from '../pages/home1/home1';
import { Home2Page } from '../pages/home2/home2';
import {CartPage} from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TestPage,
    Home1Page,
    Home2Page,
    CartPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TestPage,
    Home1Page,
    Home2Page,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
