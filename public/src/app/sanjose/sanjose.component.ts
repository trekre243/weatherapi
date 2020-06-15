import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './../template.html',
  styleUrls: ['./../styles.css']
})
export class SanjoseComponent implements OnInit {

  location: string = 'San Jose, CA';
  imgUrl: string = "https://www.westjetmagazine.com/wp-content/uploads/2018/05/ROAM_June_Three-days-San-Jose_Main.jpg";

  currentWeather = {
    humidity: '',
    temp: '',
    temp_high: '',
    temp_low: '',
    status: ''
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(94088, weather => {
      this.currentWeather = weather;
    });
  }

}
