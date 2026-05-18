import { Component, input, output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-button-clicker',
  imports: [FormsModule],
  templateUrl: './button-clicker.html',
  styleUrl: './button-clicker.css',
  standalone: true,
})
export class ButtonClicker {
  sizeValue = 0;
  changeVal = output<number>();

  onButtonPressed(){
    this.changeVal.emit(this.sizeValue);
  }
}
