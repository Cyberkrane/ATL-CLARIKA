import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './pages/main-list.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';



@NgModule({
  declarations: [
    MainListComponent,
    ListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainListComponent
  ]
})
export class TaskListModule { }
