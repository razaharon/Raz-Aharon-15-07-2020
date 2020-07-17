import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IWeatherResponse } from '../interfaces/iweather-reponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly url: string = 'http://dataservice.accuweather.com/currentconditions/v1/';

  constructor(private _http: HttpClient) { }

  public getCurrentWeather(locationKey: string): Observable<IWeatherResponse[]> {
    return this._http.get<IWeatherResponse[]>(this.url + locationKey, {
      params:{
        apikey: environment.apiKey
      }
    })
  }
}
