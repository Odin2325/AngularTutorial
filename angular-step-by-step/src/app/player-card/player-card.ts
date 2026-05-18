import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard {
  player = input<{id:number,name:string,score:number}>({id:0,name:'',score:0});

  playerID = output<number>();

  onAddPoint(){
    this.playerID.emit(this.player().id);
  }

}
