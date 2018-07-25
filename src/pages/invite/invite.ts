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
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  auth: any;
  loginError: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  invite(){
    this.navCtrl.setRoot(HomePage);
  }
  submit(){
    let alert = this.alertCtrl.create({
      title: 'Invited guest',
      subTitle: 'Guest has been Invited',
      buttons: ['Ok']
    });
    alert.present();
  
  }
  
}
