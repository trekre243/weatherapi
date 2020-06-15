import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './../template.html',
  styleUrls: ['./../styles.css']
})
export class WashingtonComponent implements OnInit {

  location: string = "Washington, DC";
  imgUrl: string = "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/28/64.jpg";

  currentWeather = {
    humidity: '',
    temp: '',
    temp_high: '',
    temp_low: '',
    status: ''
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(20001, weather => {
      this.currentWeather = weather;
    });
  }
}
