import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './pages/main-list.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    MainListComponent,
    ListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      })
  ],
  exports:[
    MainListComponent
  ]
})
export class TaskListModule { }
