import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsumerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsumerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConsumerProvider Provider');
  }

}
