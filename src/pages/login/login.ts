import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
 selector: 'page-login',
 templateUrl: 'login.html',
})
export class LoginPage {
 email: string;
 password: string;
 loginError: string;

 constructor(public navCtrl: NavController, private auth: AuthProvider, public navParams: NavParams) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

 login() {
   if (!this.email) return;

   const credentials = {
     email: this.email,
     password: this.password
   };
   this.auth.signInWithEmail(credentials).then(
     () => this.navCtrl.setRoot(HomePage),
     error => this.loginError = error.message
   );
 }

 signup() {
  this.navCtrl.push(SignupPage);
 }

}
