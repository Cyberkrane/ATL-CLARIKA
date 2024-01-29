import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'task-add',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output()
  public onNewTask: EventEmitter<Task> = new EventEmitter<Task>

  public task: Task = {
    id: "",
    description: "",
    done: false,
    priority: "low"
  }

  constructor(private toastr: ToastrService) { }

  addTask():void {
    console.log(this.task);
    if (this.task.description.trim().length === 0) {
      this.alertError();
      return;
    }
    this.onNewTask.emit(this.task);
   this.showSuccess();
    // limpiar input
    this.task.description = "";
    this.task.priority = "low";
    this.task.done = false;
  }
 
  alertError() {
    this.toastr.error("No puede agregar una tarea vacia");
  }

  showSuccess() {
    this.toastr.success("Tarea agregada");
  }

}
