import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FactoryAddBoxPage } from '../factory-add-box/factory-add-box';

/**
 * Generated class for the FactoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factory',
  templateUrl: 'factory.html',
})
export class FactoryPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryPage');
  }

  addNewBox() {
    let addBox =  this.modalCtrl.create(FactoryAddBoxPage);
    addBox.present();
  }

  sendBoxToWarehouse (boxId) {

  }

}
