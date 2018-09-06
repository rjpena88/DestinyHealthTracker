import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage(
  {
    name: 'CalendarPage'
  }
)
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})

export class CalendarPage { }


this.currentEvents = [
  {
    year: 2017,
    month: 11,
    date: 25
  },
  {
    year: 2017,
    month: 11,
    date: 26
  }
];

function onDaySelect(event) {
  
}
// create new event 
function createNewEvent() {
  document.getElementById("demo").innerHTML = "Hello World";
}