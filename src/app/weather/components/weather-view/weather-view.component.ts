import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../interfaces/weather';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../../store/state';
import * as WeatherActions from '../../store/actions';
import { WeatherHelper } from '../../utils/weather-helper';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  @Input()
  public weather: Weather
  public isCelsiusType: boolean = true;
  public readonly favorites$: Observable<Weather[]>;
  public favorites: Weather[];

  constructor(
    private _store: Store<FavoritesState>,
    public weatherHelper: WeatherHelper
  ) {
    this.favorites$ = this._store.select('favorites')
  }
  public ngOnInit(): void {
    this.favorites$.subscribe(result => this.favorites = result);
  }
  public setTemperatureType(value: boolean): void {
    this.isCelsiusType = value;
  }
  public addFavorite(): void {
    this._store.dispatch(new WeatherActions.AddFavorite(this.weather))
  }
  public removeFavorite(): void {
    this._store.dispatch(new WeatherActions.RemoveFavorite(this.weather.Key))
  }
  public isFavorite(): boolean {
    return this.favorites.findIndex(fav => fav.Key === this.weather.Key) >= 0;
  }
}
