import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodFactoryProvider } from '../providers/food-factory/food-factory';
import { ConsumerProvider } from '../providers/consumer/consumer';
import { WarehouseProvider } from '../providers/warehouse/warehouse';
import { TransporterProvider } from '../providers/transporter/transporter';
import { FactoryPage } from '../pages/factory/factory';
import { ConsumerPage } from '../pages/consumer/consumer';
import { WarehousePage } from '../pages/warehouse/warehouse';
import { TransporterPage } from '../pages/transporter/transporter';
import { ConsumerPageModule } from '../pages/consumer/consumer.module';
import { WarehousePageModule } from '../pages/warehouse/warehouse.module';
import { TransporterPageModule } from '../pages/transporter/transporter.module';
import { FactoryPageModule } from '../pages/factory/factory.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ConsumerPageModule,
    WarehousePageModule,
    TransporterPageModule,
    FactoryPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsumerPage,
    WarehousePage,
    FactoryPage,
    TransporterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodFactoryProvider,
    ConsumerProvider,
    WarehouseProvider,
    TransporterProvider
  ]
})
export class AppModule {}
