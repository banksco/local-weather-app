import { Component } from '@angular/core';
import { IcurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  current: IcurrentWeather = {
    city: 'Houston',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 41,
    description: 'Mostly Cloudy'
  }
}
