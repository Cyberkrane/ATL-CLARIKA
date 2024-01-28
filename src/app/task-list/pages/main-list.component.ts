import { Component } from "@angular/core";
import { Task } from "../interfaces/task.interface";

@Component({
    selector: "app-main-list",
    templateUrl: "./main-list.component.html",
    styleUrls: ["./main-list.component.css"]
})
export class MainListComponent {


    public description: any;


    public taskList: Task[] = [
        {
            id: "1",
            description: "Crea un proyecto Angular usando Angular CLI.",
            done: false,
            priority: "high"
        },
        {
            id: "2",
            description: "Establece un componente principal como contenedor del componente de lista de tareas.",
            done: true,
            priority: "low"
        },
        {
            id: "3",
            description: "Implementa una propiedad para almacenar tareas.",
            done: false,
            priority: "low"
        },
        {
            id: "4",
            description: "Crea una lista de tareas.",
            done: false,
            priority: "medium"
        }
    ];

    onNewTask(task: Task): void {
        this.taskList.unshift(task);
    }

    onDeleteTask(index: number): void {
        this.taskList.splice(index,1);
       console.log({index});
        }

}