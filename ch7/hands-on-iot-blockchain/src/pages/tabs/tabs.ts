import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FactoryPage } from '../factory/factory';
import { WarehousePage } from '../warehouse/warehouse';
import { TransporterPage } from '../transporter/transporter';
import { ConsumerPage } from '../consumer/consumer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FactoryPage;
  tab2Root = WarehousePage;
  tab3Root = TransporterPage;
  tab4Root = ConsumerPage;

  constructor() {

  }
}
