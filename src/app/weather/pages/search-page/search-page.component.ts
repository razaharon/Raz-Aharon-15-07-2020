import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ForecastService } from '../../services/forecast.service';
import { Weather } from '../../interfaces/weather';
import { IAutoCompleteResponse } from '../../interfaces/iauto-complete-response';
import { GeolocationService } from '../../services/geolocation.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { fade, glide } from 'src/app/animations';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  animations: [
    fade('fade',500),
    glide('glide',-20,500),
    fade('delayedFade',500,400),
    glide('delayedGlide',-20,500,400)
  ]
})
export class SearchPageComponent implements OnInit {

  public weather: Weather;

  constructor(
    private _weatherService: WeatherService,
    private _forecastService: ForecastService,
    private _geolocation: GeolocationService,
    private _route: ActivatedRoute,
    public toastService: ToastService
  ) {
    this.resetWeather();
  }

  public ngOnInit(): void {
    if(this._route.snapshot.queryParams.key){
      this.getWeatherFromRouteParams();
    } else {
      this.getLocalWeather();
    }
  }

  private getWeatherFromRouteParams(): void {
    let params = this._route.snapshot.queryParams;
    if (params.key && params.state && params.country) {
      this.setWeather(params.key, params.state, params.country);
    }
  }

  public async getLocalWeather(): Promise<void> {
    try {
      const result = await this._geolocation.getCurrentLocation();
      this.setWeather(result.Key, result.LocalizedName, result.Country.LocalizedName);
    } catch (err) {
      this.toastService.showErrorToast(err.message)
    }
  }

  private resetWeather(): void {
    this.weather = { Key: null, state: null, country: null, currentWeather: null, forecast: null };
  }

  public get isWeatherLoaded(): boolean {
    for (let key in this.weather) {
      if (this.weather[key] == null) {
        return false
      }
    }
    return true
  }

  public onSearch(state: IAutoCompleteResponse): void {
    this.setWeather(state.Key, state.LocalizedName, state.Country.LocalizedName);
  }

  public setWeather(key: string, state: string, country: string): void {
    this.resetWeather();
    this.weather.Key = key;
    this.weather.state = state;
    this.weather.country = country;
    this.setWeatherDataByKey(key);
  }

  private setWeatherDataByKey(key: string): void {
    this._weatherService.getCurrentWeather(key).toPromise().then(data => {
      this.weather.currentWeather = data[0];
    }).catch(err => this.toastService.showErrorToast(err.message));

    this._forecastService.getForecast(key).toPromise().then(data => {
      this.weather.forecast = data;
    }).catch(err => this.toastService.showErrorToast(err.message));
  }


}
