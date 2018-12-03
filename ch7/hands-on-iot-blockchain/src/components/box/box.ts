import { Component } from '@angular/core';

/**
 * Generated class for the BoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'box',
  templateUrl: 'box.html'
})
export class BoxComponent {

  text: string;

  constructor() {
    console.log('Hello BoxComponent Component');
    this.text = 'Hello World';
  }

}
