import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../interfaces/task.interface';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    // Configuración de módulo de pruebas
    toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'info']);
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [{ provide: ToastrService, useValue: toastrServiceSpy }],
    });

    // Creación del componente y fixture
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onDeleteID event when onDeleteById is called', () => {
    const id = '123';
    spyOn(component.onDeleteID, 'emit');
    
    component.onDeleteById(id);

    expect(component.onDeleteID.emit).toHaveBeenCalledWith(id);
  });

  xit('should call showSuccess method and log to console when onTaskChecked is called', () => {
    const task: Task = {
      id: '1',
      description: 'Sample Task',
      done: false,
      priority: 'medium',
    };
    spyOn(console, 'log');
    component.onTaskChecked(task);

    expect(component.showSuccess).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('onTaskChecked: ', task);
  });

  it('should call success method of ToastrService when showSuccess is called', () => {
    component.showSuccess();

    expect(toastrServiceSpy.success).toHaveBeenCalledWith("Genial!!! has completado la tarea.");
  });

  it('should call info method of ToastrService when eliminatedTask is called', () => {
    component.eliminatedTask();

    expect(toastrServiceSpy.info).toHaveBeenCalledWith("la tarea fue eliminada");
  });

});
