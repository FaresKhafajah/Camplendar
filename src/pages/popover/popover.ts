import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  alertCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController,public alertctrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  not1(){
    let alert = this.alertctrl.create({
      title: 'Breakfast',
      subTitle: 'Breakfast starts in 5 min',
      buttons: ['Ok']
    });
    alert.present();
  
  }
  not2(){
    let alert = this.alertctrl.create({
      title: 'Break',
      subTitle: 'Break Starts in 5 min',
      buttons: ['Ok']
    });
    alert.present();
  
  }
  not3(){
    let alert = this.alertctrl.create({
      title: 'Class',
      subTitle: 'Class Changed from 10am to 11am',
      buttons: ['Ok']
    });
    alert.present();
  
  }
  not4(){
    let alert = this.alertctrl.create({
      title: 'Lunch',
      subTitle: 'lunch starts in 5 min',
      buttons: ['Ok']
    });
    alert.present();
  
  }
  
  
 
}
