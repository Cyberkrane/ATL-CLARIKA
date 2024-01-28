import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuidV4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments.prod';

@Injectable({
    providedIn: 'root'
})
export class TaskService {


    public taskList: Task[] = [
        {
            id: uuidV4(),
            description: "Crea un proyecto Angular usando Angular CLI.",
            done: false,
            priority: "high"
        },
        {
            id: uuidV4(),
            description: "Establece un componente principal como contenedor del componente de lista de tareas.",
            done: true,
            priority: "low"
        },
        {
            id: uuidV4(),
            description: "Implementa una propiedad para almacenar tareas.",
            done: false,
            priority: "low"
        },
        {
            id: uuidV4(),
            description: "Crea una lista de tareas.",
            done: false,
            priority: "medium"
        }
    ];

    addNewTask(task: Task): void {
        const newTask: Task = { ...task, id: uuidV4() };
        this.taskList.push(newTask);
    }

    deleteTask(id: string): void {
       this.taskList = this.taskList.filter(task => task.id !== id);
    }


}
