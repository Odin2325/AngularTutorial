import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskCard } from "./task-card/task-card";
import { TaskCreation } from "./task-creation/task-creation";
import { ProductItem } from "./product-item/product-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule, TaskCard, TaskCreation, ProductItem],
})
export class App {
  products = [
  { name: 'Keyboard', price: 50 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  ];

  handleProductRemoval(prodName:string){
    const currProduct = this.products.find(prod=>prod.name===prodName);

    if(currProduct){
      console.log('Removing product', currProduct.name);
      this.products = this.products.filter(prod=>prod.name!==prodName);
    }
  }



  tasks = [
    {id:1,title:'Study Angular',done:false},
    {id:2,title:'Get home',done:false},
    {id:3,title:'Eat snack',done:false},
    {id:4,title:'Bring laptop to Jacobs',done:false},
    {id:5,title:'Gaming night',done:false},
  ]

  handleTaskStatusChange(data:{id:number;done:boolean}){
    const currTask = this.tasks.find(task=>task.id===data.id)

    if(currTask){
      console.log('Changing status of task.')
      currTask.done = data.done;
      return true;
    }
    else{
      console.log('Invalid ID');
      return false;
    }
  }

  handleTaskCreation(taskName:string){
    const cleanedTaskName = taskName.trim();

    if(cleanedTaskName === ''){
      console.log('Task name is empty!');
      return;
    }

    if(!this.tasks.some(task=>task.title.toLowerCase()===cleanedTaskName.toLowerCase()))
      this.tasks.push({id:this.getNextTaskId(),title:cleanedTaskName,done:false});
    else
      console.log('Task already exists!');
  }

  getNextTaskId(): number {
  if (this.tasks.length === 0) {
    return 1;
  }

  return Math.max(...this.tasks.map(task => task.id)) + 1;
}

// players = [
//   {id:1,name:'Nicolas',score:5},
//   {id:2,name:'Anna',score:8},
//   {id:3,name:'Jemimah',score:3},
// ];

// handleAddPoint(id:number){
//   const currPlayer = this.players.find(player=>player.id===id);
//   if(currPlayer){
//     currPlayer.score++;
//   }
//   else{
//     console.log('No player with such an id found!')
//   }
// }


  // users = [
  //   {id:1,name:'Nicolas'},
  //   {id:2,name:'Angi'},
  //   {id:3, name:'Max'},
  // ];
  
  // handleUpdateUser(data:{id:number,name:string}){
  //   const userToUpdate = this.users.find(user=>user.id===data.id);
  //   console.log(data.id);
  //   console.log('Current userToUpdate', userToUpdate);
  //   if(userToUpdate && data.name.trim() !== ''){
  //     console.log('Performing update to name',userToUpdate.name);
  //     userToUpdate.name = data.name;
  //   }
  // }

  // handleDeleteUser(id:number){
  //   this.users = this.users.filter(user => user.id !== id);
  // }
  
}
