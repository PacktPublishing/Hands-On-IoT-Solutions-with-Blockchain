import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FoodFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodFactoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FoodFactoryProvider Provider');
  }

}
