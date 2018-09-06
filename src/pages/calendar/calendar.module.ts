import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarModule } from 'ionic3-calendar-en'; //daira


@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [ 
    FormsModule,
    CalendarModule,
    IonicPageModule.forChild(CalendarPage),
    TranslateModule.forChild()
  ],
  exports: [
    CalendarPage
  ]
})

export class CalendarPageModule { }


 