import { AuthProvider } from './../../providers/auth/auth';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
 selector: 'page-signup',
 templateUrl: 'signup.html',
})
export class SignupPage {
 signupError: string;
 email: string;
 password: string;
 

 constructor(public navCtrl: NavController, private auth: AuthProvider, public navParams: NavParams) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad SignupPage');
 }

 signup() {
    const credentials = {
      email: this.email,
      password: this.password
    };
    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.signupError = error.message
    );
 }

}

