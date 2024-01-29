import { Component } from "@angular/core";
import { TaskService } from "../services/task.service";
import { Task } from "../interfaces/task.interface";

@Component({
    selector: "app-main-list",
    templateUrl: "./main-list.component.html"
})
export class MainListComponent {

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.loadTasksFromLocalStorage();
    }

    get taskList() {
        return [...this.taskService.taskList];
    }

    onDeleteTask(id: string): void {
        this.taskService.deleteTask(id);
        this.saveTasksToLocalStorage();
    }

    onNewTask(task: Task): void {
        this.taskService.addNewTask(task);
        this.saveTasksToLocalStorage();
    }

    saveTasksToLocalStorage(): void {
        localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    loadTasksFromLocalStorage(): void {
        const storedTasks = localStorage.getItem('taskList');
        if (storedTasks) {
            this.taskService.taskList = JSON.parse(storedTasks);
        }
    }


}