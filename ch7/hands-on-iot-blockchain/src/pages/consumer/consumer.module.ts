import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumerPage } from './consumer';

@NgModule({
  declarations: [
    ConsumerPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumerPage),
  ],
})
export class ConsumerPageModule {}
