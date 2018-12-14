/* tslint:disable:use-input-property-decorator */
/* tslint:disable:use-output-property-decorator */

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.css'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InTheMetadataComponent  {

  clearanceItem: string;
  buyEvent: EventEmitter<string> = new EventEmitter<string>();

  buyIt() {
    console.log('Child says, emiting buyEvent with: ', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}

/* tslint:enable:use-input-property-decorator */
/* tslint:enable:use-output-property-decorator */
