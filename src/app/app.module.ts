import { PopoverPage } from './../pages/popover/popover';
import { FeedBackPage } from './../pages/feed-back/feed-back';
import { LoginPageModule } from './../pages/login/login.module';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPageModule } from './../pages/signup/signup.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { SettingsPage } from '../pages/settings/settings';
import { InvitePage } from '../pages/invite/invite';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedBackPage,
    SettingsPage,
    InvitePage,
    PopoverPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SignupPageModule,
    NgCalendarModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedBackPage,
    SettingsPage,
    InvitePage,
    PopoverPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AngularFireDatabase,
    AuthProvider,

  ]
})
export class AppModule { }
