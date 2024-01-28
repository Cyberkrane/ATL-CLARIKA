import { Component } from "@angular/core";
import { TaskService } from "../services/task.service";
import { Task } from "../interfaces/task.interface";

@Component({
    selector: "app-main-list",
    templateUrl: "./main-list.component.html",
    styleUrls: ["./main-list.component.css"]
})
export class MainListComponent {

    constructor(private taskService: TaskService) { }

    get taskList() {
        return [...this.taskService.taskList];
    }

    onDeleteTask(id: string): void {
        this.taskService.deleteTask(id);
    }

    onNewTask(task: Task): void {
        this.taskService.addNewTask(task);
    }

    

}