import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      },
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
}
