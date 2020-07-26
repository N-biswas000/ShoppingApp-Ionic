import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Home2Page } from '../home2/home2';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {

  imageArray : any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageArray = [
      {'image' : 'assets/ourIcon/image18.jpg'},
      {'image' : 'assets/ourIcon/image19.jpg'},
      {'image' : 'assets/ourIcon/image20.jpg'},
      {'image' : 'assets/ourIcon/image21.jpg'},
      {'image' : 'assets/ourIcon/image22.jpg'},
      {'image' : 'assets/ourIcon/image23.jpg'},
      {'image' : 'assets/ourIcon/image24.jpg'},
      {'image' : 'assets/ourIcon/image25.jpg'},
      {'image' : 'assets/ourIcon/image26.jpg'},
      {'image' : 'assets/ourIcon/image27.jpg'},
      {'image' : 'assets/ourIcon/image28.jpg'},
      {'image' : 'assets/ourIcon/image29.jpg'},
      {'image' : 'assets/ourIcon/image30.jpg'},
      {'image' : 'assets/ourIcon/image31.jpg'},
      {'image' : 'assets/ourIcon/image32.jpg'},
      {'image' : 'assets/ourIcon/image33.jpg'},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }

  viewmore(){
    this.navCtrl.push(Home2Page);
  }

}
