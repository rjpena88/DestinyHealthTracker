import { Component } from '@angular/core';
import {
  IonicPage, NavController
} from 'ionic-angular';
import { MainPage } from '../';
import * as firebase from 'firebase'

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push(MainPage);
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }


  // Google Auth Sign Im
  signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
}
