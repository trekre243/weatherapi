import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './../template.html',
  styleUrls: ['./../styles.css']
})
export class DallasComponent implements OnInit {

  location: string = "Dallas, TX";
  imgUrl: string = "https://www.dallasartsdistrict.org/wp-content/uploads/Haubert-Joseph-Dallas-Arts-District-Skyline-View.jpg";

  currentWeather = {
    humidity: '',
    temp: '',
    temp_high: '',
    temp_low: '',
    status: ''
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(75001, weather => {
      this.currentWeather = weather;
    });
  }

}
