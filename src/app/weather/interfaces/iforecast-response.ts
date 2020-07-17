import { Forecast } from './forecast';
import { ForecastHeadline } from './forecast-headline';

export interface IForecastResponse {
  DailyForecasts: Forecast[],
	Headline: ForecastHeadline
}
