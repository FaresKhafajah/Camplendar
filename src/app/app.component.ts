import { FeedBackPage } from './../pages/feed-back/feed-back';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any }>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Settings', component: SettingsPage },
      { title: 'FeedBack', component: FeedBackPage },
      { title: 'Logout', component: LoginPage }
    ];

  }
  openPageHome() {
    this.nav.setRoot(HomePage);
  }
  openPageSettings() {
    this.nav.push(SettingsPage);
  }
  openPageFeedBack() {
    this.nav.push(FeedBackPage);
  }
  openPageLogout() {
    this.nav.setRoot(LoginPage);
  }
}

