import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { reducer } from './store/reducers';
import { WeatherRoutingModule } from './weather-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { localStorageSyncReducer } from './store/meta-reducers';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchBarComponent,
    WeatherViewComponent,
    FavoritesComponent,
    ForecastComponent,
    FavoriteItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({
      favorites: reducer
    }, { metaReducers: [localStorageSyncReducer] }),
    NgbTypeaheadModule,
    WeatherRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class WeatherModule { }
