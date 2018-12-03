import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactoryPage } from './factory';
import { FactoryAddBoxPageModule } from '../factory-add-box/factory-add-box.module';

@NgModule({
  declarations: [
    FactoryPage,
  ],
  imports: [
    IonicPageModule.forChild(FactoryPage),
    FactoryAddBoxPageModule
  ],
})
export class FactoryPageModule {}
