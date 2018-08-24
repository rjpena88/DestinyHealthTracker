import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../';
import { DataService } from '../../providers/data/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { firebase } from 'firebase';
// import  *  as "firebase";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  email: string;
  password: string;

  // Move to cards.ts
  constructor(public navCtrl: NavController, private auth: DataService, private fireAuth: AngularFireAuth, public afAuth: AngularFireAuth, ) {
    // this.auth.getDrugById(61).subscribe(console.log);
  }

  login() {
    this.auth.login(this.email, this.password).then((data) => {
      this.navCtrl.push(MainPage);
    }, (error: any) => {
      this.navCtrl.push(WelcomePage);
    });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }


  signup() {
    this.navCtrl.push('SignupPage');
  }

  // Ionic Google Auth Sign In - NOT IN USE
  signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider);
    // this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }
}