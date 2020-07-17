import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IForecastResponse } from '../interfaces/iforecast-response';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private readonly url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

  constructor(private _http: HttpClient) { }

  public getForecast(locationKey: string): Observable<IForecastResponse> {
    return this._http.get<IForecastResponse>(this.url + locationKey,{
      params:{
        apikey: environment.apiKey,
      }
    })
  }
}
