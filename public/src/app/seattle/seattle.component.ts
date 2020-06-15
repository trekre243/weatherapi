import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './../template.html',
  styleUrls: ['./../styles.css']
})
export class SeattleComponent implements OnInit {

  location: string = "Seattle, WA";
  imgUrl: string = "https://media-cdn.tripadvisor.com/media/photo-s/16/f3/85/ff/1-day-seattle-sightseeing.jpg";

  currentWeather = {
    humidity: '',
    temp: '',
    temp_high: '',
    temp_low: '',
    status: ''
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(98008, weather => {
      this.currentWeather = weather;
    });
  }

}
