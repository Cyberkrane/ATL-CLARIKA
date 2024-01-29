import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainListComponent } from './main-list.component';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task.interface';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ListComponent } from '../components/list/list.component';


describe('MainListComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;
  let taskService: jasmine.SpyObj<TaskService>;
  let toastrService: ToastrService;

  beforeEach(() => {
    taskService = jasmine.createSpyObj('TaskService', ['deleteTask', 'addNewTask']);
    
    TestBed.configureTestingModule({
      declarations: [MainListComponent, AddTaskComponent, ListComponent],
      providers: [
        { provide: TaskService, useValue: taskService },
        { provide: ToastrService, useValue: toastrService }
      ],
      imports: [ToastrModule.forRoot()],
    });

    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call loadTasksFromLocalStorage on ngOnInit', () => {
    spyOn(component, 'loadTasksFromLocalStorage');
    
    component.ngOnInit();
    
    expect(component.loadTasksFromLocalStorage).toHaveBeenCalled();
  });

  xit('should call deleteTask on onDeleteTask', () => {
    const taskId = '123';
    
    component.onDeleteTask(taskId);
    
    expect(taskService.deleteTask).toHaveBeenCalledWith(taskId);
  });

  xit('should call addNewTask on onNewTask', () => {
    const newTask: Task = { 
        id: "d5433101-eee4-4132-bb0e-3b200c225490",
        description: "No hay tareas pendientes",
        done: true,
        priority: "low"
    };
    
    component.onNewTask(newTask);
    
    expect(taskService.addNewTask).toHaveBeenCalledWith(newTask);
  });

  it('should call saveTasksToLocalStorage on ngOnDestroy', () => {
    spyOn(component, 'saveTasksToLocalStorage');
  })

});
