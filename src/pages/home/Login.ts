import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-Login',
  templateUrl: 'Login.html'
})
export class LoginPage {


  constructor(public navCtrl: NavController) {


    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
     this.navCtrl.push(TestPage);
  }

}
