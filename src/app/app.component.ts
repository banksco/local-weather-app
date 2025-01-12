import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrentWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'local-weather-app';
}
