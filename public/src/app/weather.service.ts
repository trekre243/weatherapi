import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getWeather(zip, func) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=bcac5f29124f6f64ccf7bd0aa87f9b99`).subscribe(data => {
      func({
        humidity: data['main']['humidity'],
        temp: data['main']['temp'],
        temp_high: data['main']['temp_max'],
        temp_low: data['main']['temp_min'],
        status: data['weather'][0]['description']
      });
    });
  }
}
