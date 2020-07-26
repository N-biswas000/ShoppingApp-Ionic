import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/home/Login';
import { Home2Page } from '../pages/home2/home2';
import {CartPage} from '../pages/cart/cart';
import { Home1Page } from '../pages/home1/home1';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  rootPage1:any = Home2Page;
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  gotocart(){
    this.nav.setRoot(CartPage);
  }
  gotohome(){
    this.nav.setRoot(Home1Page);
  }
  gotosignup(){
    this.nav.setRoot(LoginPage);
  }
}

