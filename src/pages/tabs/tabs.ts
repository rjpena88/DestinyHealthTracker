import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Tab1Root, Tab2Root, Tab3Root, Tab4Root, Tab5Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";


  // change translateservice values back to TAB*ROOT and modify translation JSON instead
  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['RX','Labs', 'Home', 'Mail', 'Calendar']).subscribe(values => {
      this.tab1Title = values['RX'];
      this.tab2Title = values['Labs'];
      this.tab3Title = values['Home'];
      this.tab4Title = values['Mail'];
      this.tab5Title = values['Calendar'];
    });
  }
}
