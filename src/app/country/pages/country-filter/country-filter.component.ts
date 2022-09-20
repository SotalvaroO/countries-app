import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class CountryFilterComponent implements OnInit {
  public word: string = '';
  public isFailedResponse: boolean = false;
  private _countries: Country[] = [];
  public suggestedCountries: Country[] = [];
  public showSuggestion: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  public get countries(): Country[] {
    return [...this._countries];
  }

  public search(word: string) {
    this.showSuggestion = false;
    this.word = word;
    if (!this.word) return;
    this.isFailedResponse = false;
    this.countryService.getByCountry(this.word).subscribe(
      (countries) => {
        this._countries = countries;
      },
      (error) => {
        this.isFailedResponse = true;
        this._countries = [];
      }
    );
  }
  public suggestions(word: string) {
    this.isFailedResponse = false;
    this.showSuggestion = true;
    this.word = word;
    if (!word) {
      this.suggestedCountries = [];
    }
    this.countryService.getByCountry(word).subscribe(
      (countries) => {
        this.suggestedCountries = countries.splice(0, 3);
      },
      (err) => {
        this.suggestedCountries = [];
      }
    );
  }

  searchSuggested(word: string) {
    this.search(word);
    
  }
}
