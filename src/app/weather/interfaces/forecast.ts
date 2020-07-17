import { IDayNight } from './iday-night';
import { Temperature } from './Temperature';

export interface Forecast {
	Date: Date,
	Day: IDayNight,
	EpochDate: number,
	Link: string,
	MobileLink: string,
	Night: IDayNight,
	Sources: string[],
	Temperature: {
		Maximum: Temperature,
		Minimum: Temperature
	}
}
