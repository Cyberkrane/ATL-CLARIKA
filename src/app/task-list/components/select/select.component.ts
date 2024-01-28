import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Output() onchange: EventEmitter<any> = new EventEmitter<any>();
  options: any;

  constructor() { }

  onChange(event: any) {
    this.onchange.emit(event.target.value);
  }

}
