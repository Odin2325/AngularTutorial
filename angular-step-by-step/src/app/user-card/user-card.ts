import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
  imports: [FormsModule],
  standalone: true,
})

export class UserCard {

  currUser = input<{id:number,name:string}>({id:0,name:''});

  typedValue = '';

  updatedUser = output<{id:number, name:string}>();

  updateButton(){
    console.log('emitting new user');
    this.updatedUser.emit(
      {
        id: this.currUser().id,
        name: this.typedValue
      }
    );
    this.typedValue = '';
  }

}
