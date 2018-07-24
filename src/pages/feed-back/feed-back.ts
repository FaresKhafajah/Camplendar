import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FeedBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-back',
  templateUrl: 'feed-back.html',
})
export class FeedBackPage {
  auth: any;
  loginError: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedBackPage');
  }

  feedback(){
    this.navCtrl.setRoot(HomePage);
  }
  submit(){
    let alert = this.alertCtrl.create({
      title: 'FeedBack',
      subTitle: 'Thank you for your feedback',
      buttons: ['Dismiss']
    });
    alert.present();
  
  }
  
}
