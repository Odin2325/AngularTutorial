import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-list-selector',
  imports: [],
  templateUrl: './list-selector.html',
  styleUrl: './list-selector.css',
  standalone: true,
})
export class ListSelector {
  item = input<string>('')

  selectItem = output<string>()

  onItemSelected(){
    this.selectItem.emit(this.item())
  }
}
