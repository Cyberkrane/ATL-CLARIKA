import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { MainListComponent } from './pages/main-list.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';



@NgModule({
  declarations: [
    MainListComponent,
    CardComponent,
    InputComponent,
    SelectComponent,
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
