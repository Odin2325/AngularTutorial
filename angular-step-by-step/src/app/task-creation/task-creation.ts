import { Component, output } from '@angular/core';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-creation',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './task-creation.html',
  styleUrl: './task-creation.css',
  standalone: true,
})
export class TaskCreation {
  
  taskName = new FormControl('');
  newTask = output<string>();

  onTaskCreation(){
    this.newTask.emit(this.taskName.value ?? '');
    this.taskName.setValue('');
  }


}
