import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-deletion',
  imports: [],
  templateUrl: './user-deletion.html',
  styleUrl: './user-deletion.css',
})
export class UserDeletion {

  user = input.required<{ id: number; name: string }>();

  deleteUser = output<number>();

  onDelete() {
    this.deleteUser.emit(this.user().id);
  }



}
