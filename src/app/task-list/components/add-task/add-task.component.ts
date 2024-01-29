import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

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

  addTask():void {
    console.log(this.task);
    if (this.task.description.trim().length === 0) {
      return;
    }
    this.onNewTask.emit(this.task);
    
    // limpiar input
    this.task.description = "";
    this.task.priority = "low";
    this.task.done = false;
  }
 

}
