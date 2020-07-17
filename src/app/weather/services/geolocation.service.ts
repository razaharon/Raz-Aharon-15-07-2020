import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location } from '../interfaces/Location';
import { IGeolocationResponse } from '../interfaces/igeolocation-response';


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private readonly url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';

  constructor(private _http: HttpClient) { }

  private getGeolocation(): Promise<Location> {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (response) => res({ lon: response.coords.longitude, lat: response.coords.latitude }),
        (err) => rej(err)
      );
    })
  }

  private getStateByGeolocation(lat: number, lon: number): Promise<IGeolocationResponse> {
    return this._http.get<IGeolocationResponse>(this.url, {
      params: {
        apikey: environment.apiKey,
        q: `${lat.toString()},${lon.toString()}`
      }
    }).toPromise();
  }

  public async getCurrentLocation(): Promise<IGeolocationResponse> {
      const location = await this.getGeolocation();
      return await this.getStateByGeolocation(location.lat, location.lon);
  }
}
