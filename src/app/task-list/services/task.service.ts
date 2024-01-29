import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    public taskList: Task[] = [];

    getAllTasks(): Task[] {
        return [...this.taskList];
    }

    addNewTask(task: Task): void {
        const newTask: Task = { ...task, id: uuidV4() };
        this.taskList.push(newTask);
    }

    deleteTask(id: string): void {
       this.taskList = this.taskList.filter(task => task.id !== id);
    }


}
