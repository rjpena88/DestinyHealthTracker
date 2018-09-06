import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient,HttpClientModule } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../providers/data/data.service';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  cardItems: any[];
  currentItems: any = [];
  result:any= [];
  data: Observable<any>;
  constructor(public navCtrl: NavController, public http: HttpClient, private auth: DataService) {
    
    this.auth.getDrugById(61).subscribe(data => {
      console.log(data);
      console.log("returned id");
    });
    this.cardItems = [
      {
        //Prescription Array ( Need rX API! )
        user: {
          avatar: 'assets/img/rX-avatar.png',
          name: 'Ibuprofen'
        },
        dosage: '1 800mg pill twice a day.',
        image: 'assets/img/advance-card-ibu.jpeg',
        content: 'Advil and ibuprofen are generally well tolerated medicines with a low incidence of adverse side effects. Ibuprofen has an extensive safety record, but as with any other OTC medication, you should exercise caution before taking this medication with any other prescription medications. Particular consideration must be taken before using Advil, or ibuprofen, for pain if you are already taking an anticoagulant (blood thinner) to avoid excessive bleeding. The current medical advice on taking NSAIDs during pregnancy is not to take them during the third trimester, as they may cause risk to the fetus. Anyone who is allergic to aspirin may also have an allergic reaction to other NSAIDs, including ibuprofen.',
      },
      {
        //Picture or no picture?
        user: {
          avatar: 'assets/img/rX-avatar.png',
          name: 'Azithromycin',
          otherNames: 'Common brands: Zithromax, AzaSite, Zmax'
        },
        dosage: 'As directed by Doctor.',

        // image: 'assets/img/advance-card-ibu.jpeg',

        content: 'Antibiotic, it can treat various types of infections, including pink eye bacterial conjunctivitis.'
      },
    ];

  }

  // getData(){

  //   this.auth.getDrugById(61).subscribe(data => {
  //     console.log(data);
  //     console.log("returned id");
  //   });

    // var url = 'https://destiny-health-tracker-app.firebaseio.com/rx';
    // this.data = this.http.get(url);
    // this.data.subscribe(data =>{
    //   console.log(data);
    //   // this.result=data;
    // return.this.http.get('https://destiny-health-tracker-app.firebaseio.com/rx.json');

    // const rootRef = firebase.database().ref();

    // const oneRef = rootRef.child('rx').child('results').child('6081').child('active_ingredient').child('0').limitToFirst(10).valueChanges();
    // console.log('getData testing');
    // console.log(this.getData());
    // };


};
