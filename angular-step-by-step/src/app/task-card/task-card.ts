import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  currTask = input<{id:number,title:string,done:boolean}>({id:0,title:'',done:false});

  completeTask = output<{ id: number; done: boolean }>();

  onStatusChange(){
    this.completeTask.emit({
      id: this.currTask().id,
      done: !this.currTask().done
    });
  }


}
