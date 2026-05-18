import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.html',
  styleUrl: './city-card.css',
  standalone: true,
})
export class CityCard {
  city = input<{name:string;pop:number}>({name:'',pop:0});

  typedValue = output<{cityName: string, text: string}>();
  
  onTyping(event: Event){
    const input = event.target as HTMLInputElement;

    this.typedValue.emit({
      cityName: this.city().name,
      text: input.value
    });
  }
    
}
