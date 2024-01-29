import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onNewTask: EventEmitter<Task> = new EventEmitter<Task>();

  @Input()
  public taskList: Task[] = [
    {
      id: "0",
      description: "No hay tareas pendientes",
      done: true,
      priority: "low"
    }
  ];

  constructor(private toastr: ToastrService) { }

  onDeleteById(id: string): void {
    if (!id) return;
    this.onDeleteID.emit(id);
    this.eliminatedTask();
  }

  onTaskChecked(task: Task): void {
    this.showSuccess();
    console.log('onTaskChecked: ', task);
  }

  showSuccess() {
    this.toastr.success("Genial!!! has completado la tarea.");
  }

  eliminatedTask(): void {
   this.toastr.info("la tarea fue eliminada");
  }
}
