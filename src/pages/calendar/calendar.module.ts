import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [ 
    FormsModule,
    IonicPageModule.forChild(CalendarPage),
    TranslateModule.forChild()
  ],
  exports: [
    CalendarPage
  ]
})
export class CalendarPageModule { }
