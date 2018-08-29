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
  constructor(public navCtrl: NavController, public http: HttpClient, private auth: DataService, public items: Items) {
    // this.auth.getDrugById(61).subscribe(console.log);
    this.cardItems = [
      
      {
        //Prescription Array ( Need rX API! )
        user: {
          avatar: 'assets/img/rX-avatar.png',
          name: 'Ibuprofen'
        },
        date: '{{ input.date }}',
        image: 'assets/img/advance-card-ibu.jpeg',
        content: 'At home you have unlimited time. No worries. No cares. Just float and wait for the wind to blow you around. Just think about these things in your mind - then bring them into your world. We have all at one time or another mixed some mud.',
      },
      {
        //Picture or no picture?
        user: {
          avatar: 'assets/img/rX-avatar.png',
          name: 'Hydrocodone',
          otherNames: 'Vicodin, Vicodin ES, Vicodin HP, Lortab, Lorcet, Lorcet Plus, Norco, Zydone, Hycet, Maxidone, Stagesic, Verdrocet, Xodol, Zamicet, Zolvit and Anexsia (discontinued brand)'
        },
        date: '{{ input.date }}',

        // image: 'assets/img/advance-card-ibu.jpeg',

        content: 'In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Just relax and let it flow. That easy. Everybody needs a friend. Let your heart take you to wherever you want to be. How do you make a round circle with a square knife? That is your challenge for the day. We can always carry this a step further. There is really no end to this.',
      },
    ];

  }

  getData(){
    // var url = 'https://destiny-health-tracker-app.firebaseio.com/rx';
    // this.data = this.http.get(url);
    // this.data.subscribe(data =>{
    //   console.log(data);
    //   // this.result=data;

    const rootRef = firebase.database().ref();

    const oneRef = rootRef.child('rx').child('results').child('6081').child('active_ingredient').child('0').limitToFirst(10).valueChanges();
    console.log('getData testing');
    console.log(this.getData());
    };


}

