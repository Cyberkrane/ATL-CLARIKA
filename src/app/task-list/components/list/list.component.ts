import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output() 
  public onDeleteID: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public taskList: Task[] = [
    {
      id: "0",
      description: "No hay tareas pendientes",
      done: true,
      priority: "low"
    }
  ];

  // onDeleteTask(index: number): void {
  //   // this.taskList = this.taskList.filter((task) => task.id !== id);
  //   console.log({index});
  // }

  onDeleteById(id: number): void {
    this.onDeleteID.emit(id);
    console.log({id});
  }
 
}
