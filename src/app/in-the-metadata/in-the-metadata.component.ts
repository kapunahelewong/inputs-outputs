import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.css'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InTheMetadataComponent  {


  buyEvent: EventEmitter<string> = new EventEmitter<string>();


  buyIt() {
    console.log('Child says, emiting buyEvent: ', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}
