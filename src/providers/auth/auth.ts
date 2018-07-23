import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
 private user: firebase.User;

 constructor(public afAuth: AngularFireAuth) {
   afAuth.authState.subscribe(user => {
     this.user = user;
   });
 }

 signInWithEmail(credentials) {
   return this.afAuth.auth.signInWithEmailAndPassword(
     credentials.email,
     credentials.password
   );
 }
 signUp(credentials) {
  return this.afAuth.auth.createUserWithEmailAndPassword(
    credentials.email,
    credentials.password,
  );
}
getEmail() {
  return this.user && this.user.email;
}



}


