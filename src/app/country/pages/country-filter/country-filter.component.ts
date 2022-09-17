import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
})
export class CountryFilterComponent implements OnInit {
  public word: string = '';
  public isFailedResponse: boolean = false;
  private _countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  public get countries(): Country[] {
    return [...this._countries];
  }

  public search(word: string) {
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
    //TODO: crear sugerencias
  }
}
