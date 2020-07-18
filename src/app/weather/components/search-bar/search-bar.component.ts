import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAutoCompleteResponse } from '../../interfaces/iauto-complete-response';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { AutoCompleteService } from '../../services/auto-complete.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  public selectedCity: IAutoCompleteResponse;
  searchInput: string = '';

  @Input() public inputPlaceholder: string;
  @Output() public search: EventEmitter<IAutoCompleteResponse> = new EventEmitter<IAutoCompleteResponse>();

  constructor(
    private _autoCompleteService: AutoCompleteService,
    public toastService: ToastService
  ) { }

  public onSearch(): void {
    if (!this.searchInput) return;
    if (!this.selectedCity)
      return this.toastService.showErrorToast('Invalid state, please try again');
    this.search.emit(this.selectedCity);
  }

  public keyPress(event): void {
    this.filterText()
    if (event.key === "Enter")
      this.onSearch();
  }

  public filterText(): void {
    try{
      const nonEnglishRegex = new RegExp(/^[^A-Za-z]*$/);
      this.searchInput = this.searchInput.replace(nonEnglishRegex, '');
    } catch(err) {
      return;
    }
  }

  public selectFormatter = (value: IAutoCompleteResponse): string => {
    this.selectedCity = value;
    this.onSearch()
    return this.popupFormatter(value);
  }
  public popupFormatter = (value: IAutoCompleteResponse): string => {
    return value ? `${value.LocalizedName}, ${value.Country.LocalizedName}` : null
  }

  public onAutoComplete = (value$: Observable<string>): Observable<IAutoCompleteResponse[]> => {
    return value$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this._autoCompleteService.getAutoComplete(value)),
      catchError((err) => { this.toastService.showErrorToast(err.message); return of([]) })
    )
  }

}
