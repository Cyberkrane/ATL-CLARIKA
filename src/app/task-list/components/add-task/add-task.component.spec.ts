import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      providers: [ToastrService],
      imports: [ToastrModule.forRoot()],
    });
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should emit onNewTask when addTask is called', () => {
    spyOn(component.onNewTask, 'emit');
    component.addTask();
    expect(component.onNewTask.emit).toHaveBeenCalledOnceWith(component.task);
  });

  it('should show error toastr when adding empty task', () => {
    spyOn(toastrService, 'error');
    component.addTask();
    expect(toastrService.error).toHaveBeenCalledWith('No puede agregar una tarea vacia');
  });

  it('should show success toastr when adding task', () => {
    spyOn(toastrService, 'success');
    component.task.description = 'Test Task';
    component.addTask();
    expect(toastrService.success).toHaveBeenCalledWith('Tarea agregada');
  });

  it('should clear input fields after adding task', () => {
    component.task.description = 'Test Task';
    component.task.priority = 'high';
    component.task.done = true;

    component.addTask();

    expect(component.task.description).toEqual('');
    expect(component.task.priority).toEqual('low');
    expect(component.task.done).toEqual(false);
  });

  it('should call alertError when adding empty task', () => {
    spyOn(component, 'alertError');
    component.addTask();
    expect(component.alertError).toHaveBeenCalled();
  });

  it('should call showSuccess when adding task', () => {
    component.task.description = 'Test Task';
    spyOn(component, 'showSuccess');
    component.addTask();
    expect(component.showSuccess).toHaveBeenCalled();
  });

  xit('should render task description input', () => {
    const inputElement = fixture.debugElement.query(By.css('input[name="taskDescription"]')).nativeElement;
    expect(inputElement).toBeTruthy();
  });


});
