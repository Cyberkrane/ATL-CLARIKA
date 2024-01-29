import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../interfaces/task.interface';
import { v4 as uuidV4 } from 'uuid';

describe('TaskService', () => {
  let service: TaskService;
  let task: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new task to the list with a unique ID', () => {
    const task = { id: '1164aaf2-d3d4-4bf4-82f0-03e8413bcc94',
      description: 'Salvar el mundo',
      done: false,
      priority: 'low' };
    service.addNewTask(task);
    expect(service.taskList.length).toBe(1);
    expect(service.taskList[0].description).toBe('Salvar el mundo');
    expect(service.taskList[0].done).toBeFalsy();
    expect(service.taskList[0].id).toBeDefined();
  });

  it('should delete a task from the list by ID', () => {
    const task = {
                  id: uuidV4(),
                  description: 'Salvar el mundo',
                  done: true,
                  priority: 'low'
                };
    service.addNewTask(task);
    const taskId = service.taskList[0].id;
    service.deleteTask(taskId);
    expect(service.taskList.length).toBe(0);
  });
});

