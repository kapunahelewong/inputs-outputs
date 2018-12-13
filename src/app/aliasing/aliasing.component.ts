import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aliasing',
  templateUrl: './aliasing.component.html',
  styleUrls: ['./aliasing.component.css'],
  inputs: ['input1: saveForLaterItem'], // propertyName:alias
  outputs: ['outputEvent1: saveForLaterEvent']
})
export class AliasingComponent {

  outputEvent1: EventEmitter<string> = new EventEmitter<string>();

  @Input('wishListItem') input2: string; //  @Input(alias)
  @Output('wishEvent') outputEvent2: EventEmitter<string> = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  // @Output() deleteRequest: EventEmitter<string> = new EventEmitter<string>();



  saveIt() {
    console.log('Child says, emiting outputEvent1: ', this.input1);
    this.outputEvent1.emit(this.input1);
  }

  wishForIt() {
    console.log('Child says, emiting outputEvent2: ', this.input2);
    this.outputEvent2.emit(this.input2);
  }


}
