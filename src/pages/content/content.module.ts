import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentPage } from './content';
import { AccordionComponent } from '../../components/accordion/accordion';

@NgModule({
  declarations: [
    ContentPage,
    AccordionComponent
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContentPage,

  ]
})



export class ContentPageModule { }


