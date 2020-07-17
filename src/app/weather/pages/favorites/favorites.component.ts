import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../interfaces/weather';
import { Store } from '@ngrx/store';
import { FavoritesState } from '../../store/state';
import { fade, glide } from 'src/app/animations';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  animations: [
    fade('fade',500),
    glide('glide',-20,500),
    fade('delayedFade',500,400),
    glide('delayedGlide',-20,500,400)
  ]
})
export class FavoritesComponent {

  public readonly favorites$: Observable<Weather[]>

  constructor(private _store: Store<FavoritesState>) {
    this.favorites$ = this._store.select('favorites');
  }

}
