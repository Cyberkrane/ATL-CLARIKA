import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { MainListComponent } from './pages/main-list.component';



@NgModule({
  declarations: [
    MainListComponent,
    CardComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainListComponent
  ]
})
export class TaskListModule { }