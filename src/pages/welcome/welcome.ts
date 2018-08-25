import { Component } from '@angular/core';
import {
  IonicPage, NavController
} from 'ionic-angular';
import { MainPage } from '../';
import { DataService } from '../../providers/data/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

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

  email:string;
  password:string;

// Move to cards.ts
  constructor(public navCtrl: NavController, private auth: DataService, private fireAuth: AngularFireAuth) {
    // this.auth.getDrugById(61).subscribe(console.log);
   }

  login() {
    this.auth.login(this.email, this.password).then((data) => {
      this.navCtrl.push(MainPage);
    }, (error:any) => {
      this.navCtrl.push(WelcomePage);
    });
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }


  // Google Auth Sign Im
  signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider);
    
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());




  }
}
