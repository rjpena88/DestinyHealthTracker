import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../';
import { DataService } from '../../providers/data/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import firebase from 'firebase/app';

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
    // console.log("this is it");

    // this.auth.getUserById("TcKr9t0s7hZP4v4dBiTj8Wg31wN2").subscribe(console.log);

  }
// insert ionic toast as ifthen statement
  login() {
    this.auth.login(this.email, this.password).then((data) => {
      this.navCtrl.push(MainPage);
    }, (error: any) => {
      this.navCtrl.push(WelcomePage);
    });
  }

  // Ionic Google Auth Sign Up
  signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}