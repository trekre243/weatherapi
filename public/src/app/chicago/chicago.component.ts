import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './../template.html',
  styleUrls: ['./../styles.css']
})
export class ChicagoComponent implements OnInit {

  location: string = "Chicago, IL";
  imgUrl: string = "https://www.tripsavvy.com/thmb/3GHBveWU4OneMz-NxUfoiQO1Hcc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/lincoln-park--chicago--illinois-skyline-1063769770-8edeeafcfcdf4c2b9aa88071d93dc526.jpg";

  currentWeather = {
    humidity: '',
    temp: '',
    temp_high: '',
    temp_low: '',
    status: ''
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(60007, weather => {
      this.currentWeather = weather;
    });
  }

}
