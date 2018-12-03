import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactoryAddBoxPage } from './factory-add-box';

@NgModule({
  declarations: [
    FactoryAddBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(FactoryAddBoxPage),
  ],
})
export class FactoryAddBoxPageModule {}
