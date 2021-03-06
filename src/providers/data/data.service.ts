import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase/app';

@Injectable()
export class DataService {
  // this variable we made
  // user;
  public user: firebase.User;
  DrugList: AngularFireList<any>;
  PatientList: AngularFireList<any>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    afAuth.authState.subscribe(usr => {
      // storing the usr into user variable
      this.user = usr;
      console.log("welcome " + usr.email)
    });

  }

  // Test Prescription logic
  getDrugById(id: number) {
    
    console.log("I'm from the getDrug function in data.service.ts");
    return this.db.object('/rx/results/' + String(id)).valueChanges();
    // var results = this.db.list('results');
    // console.log(results);

  }
  // Get User Info
  getUserById(PatientID: string) {
    return this.db.object('/patients/' + String(PatientID)).valueChanges();
    // const results = this.db.list('results');
    // console.log(results);

  }
  // Welcome logic

  login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  get authenticated(): boolean {
    if (firebase.auth().currentUser) {
      return true;
    }
    return false;
  }

}
