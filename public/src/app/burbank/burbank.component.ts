import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './../template.html',
  styleUrls: ['./../styles.css']
})
export class BurbankComponent implements OnInit {

  location: string = "Burbank, CA";
  imgUrl: string = "https://i.pinimg.com/originals/60/78/bd/6078bdeb890a1cfd0d0f9b4c8ef93ce0.jpg";

  currentWeather = {
    humidity: '',
    temp: '',
    temp_high: '',
    temp_low: '',
    status: ''
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(91501, weather => {
      this.currentWeather = weather;
    });
  }

}
