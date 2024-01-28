import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output() 
  public onDeleteID: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public taskList: Task[] = [
    {
      id: "0",
      description: "No hay tareas pendientes",
      done: true,
      priority: "low"
    }
  ];

  onDeleteById(id: string): void {
    if (!id) return;
    
    this.onDeleteID.emit(id);
    console.log(`la tarea con el id: ${id} fue eliminada`);
  }
 
}
