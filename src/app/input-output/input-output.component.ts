import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  @Input() item: string;

  @Output() deleteRequest: EventEmitter<string> = new EventEmitter<string>();

  lineThrough = '';

  delete() {
    console.log('Child says, emiting item deleteRequest: ', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
