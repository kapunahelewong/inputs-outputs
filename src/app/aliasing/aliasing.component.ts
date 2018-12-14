/* tslint:disable:use-input-property-decorator */
/* tslint:disable:use-output-property-decorator */

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aliasing',
  templateUrl: './aliasing.component.html',
  styleUrls: ['./aliasing.component.css'],
  inputs: ['input1: saveForLaterItem'], // propertyName:alias
  outputs: ['outputEvent1: saveForLaterEvent']
})
export class AliasingComponent {

  saveForLaterItem: string;
  outputEvent1: EventEmitter<string> = new EventEmitter<string>();


  @Input('wishListItem') input2: string; //  @Input(alias)
  @Output('wishEvent') outputEvent2: EventEmitter<string> = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  saveIt() {
    console.log('Child says, emiting outputEvent1 with: ', this.saveForLaterItem);
    this.outputEvent1.emit(this.saveForLaterItem);
  }

  wishForIt() {
    console.log('Child says, emiting outputEvent2 with: ', this.input2);
    this.outputEvent2.emit(this.input2);
  }


}
/* tslint:enable:use-input-property-decorator */
/* tslint:enable:use-output-property-decorator */

