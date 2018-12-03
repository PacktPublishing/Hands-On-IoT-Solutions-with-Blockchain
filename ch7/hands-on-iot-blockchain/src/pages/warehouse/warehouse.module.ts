import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarehousePage } from './warehouse';

@NgModule({
  declarations: [
    WarehousePage,
  ],
  imports: [
    IonicPageModule.forChild(WarehousePage),
  ],
})
export class WarehousePageModule {}
