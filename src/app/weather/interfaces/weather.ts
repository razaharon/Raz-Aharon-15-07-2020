import { IWeatherResponse } from './iweather-reponse';
import { IForecastResponse } from './iforecast-response';

export interface Weather {
  Key: string,
  state: string,
  country: string,
  currentWeather: IWeatherResponse,
  forecast: IForecastResponse
}
