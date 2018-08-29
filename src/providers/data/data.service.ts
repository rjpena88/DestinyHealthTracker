import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase/app';

@Injectable()
export class DataService {

  private user: firebase.User;
  DrugList: AngularFireList<any>;
  PatientList: AngularFireList<any>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    afAuth.authState.subscribe(usr => {
      this.user = usr;
      console.log("welcome " + usr.email)
    });
    // console.log("data constructor");
    // this.DrugList = db.list<any>('results');
    // console.log(this.DrugList);
  }

  // Test Prescription logic
  getDrugById(id: number) {
    // return this.db.database.ref('results').orderByChild('id').equalTo('8ee4dc5e-df8e-4c0d-8522-a648565ea366');
    console.log("I'm from the getDrug function");
    return this.db.object('/rx/results/' + String(id)).valueChanges();
    const results = this.db.list('results');
    console.log(results);

  }
  // Get User Info
  getUserById(PatientID: string) {
    return this.db.object('/patients/' + String(id)).valueChanges();
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
