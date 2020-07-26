import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  imageArray : any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.imageArray = [
      {'image' : 'assets/ourIcon/slide1.jpeg'},
      {'image' : 'assets/ourIcon/slide2.jpeg'},
      {'image' : 'assets/ourIcon/slide3.jpeg'},
      {'image' : 'assets/ourIcon/slide5.jpeg'},
      {'image' : 'assets/ourIcon/slide6.jpg'}
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

  showDescription(){
     this.navCtrl.push(CartPage);
  }

}
