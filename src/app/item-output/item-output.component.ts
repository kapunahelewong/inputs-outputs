import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {


  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
