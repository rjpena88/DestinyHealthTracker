import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import firebase from 'firebase/app';

@Injectable()
export class DataService {

  private user: firebase.User;
  DrugList: AngularFireList<any>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    afAuth.authState.subscribe(usr => {
      this.user = usr;
    });
    this.DrugList = db.list<any>('results');
    console.log(this.DrugList);
  }

  // Test Prescription logic
  getDrugById(id: number) {
    //return this.db.database.ref('results').orderByChild('id').equalTo('8ee4dc5e-df8e-4c0d-8522-a648565ea366').;
    return this.db.list('results', ref => ref.orderByChild('id').equalTo('8ee4dc5e-df8e-4c0d-8522-a648565ea366').limitToFirst(5)).valueChanges();
  }

  // Welcome logic

  login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  get authenticated(): boolean {
    if(firebase.auth().currentUser) {
      return true;
    }
    return false;
  }

}
