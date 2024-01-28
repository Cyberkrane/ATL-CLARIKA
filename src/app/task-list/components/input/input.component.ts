import { Component } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  
description: any;

  constructor() { }

  options = [
    'High',
    'Medium',
    'Low'
  ]


}
