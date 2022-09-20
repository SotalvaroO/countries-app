import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
        margin-bottom: 5px;
      }
    `,
  ],
})
export class RegionFilterComponent implements OnInit {
  public regions: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];

  private _countries: Country[] = [];

  public get countries(): Country[] {
    return [...this._countries];
  }

  /* public regions: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CEFTA',
    'AL',
    'NAFTA',
    'SAARC',
  ]; */

  public activatedRegion: string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  public activateRegion(region: string) {
    if (this.activatedRegion === region) {
      return;
    }

    this.activatedRegion = region;
    console.log(this.activatedRegion);
    this._countries = [];
    this.searchCountriesByRegion(this.activatedRegion);
  }

  public searchCountriesByRegion(region: string) {
    return this.countryService.getByRegion(region).subscribe((countries) => {
      this._countries = countries;
      console.log(countries);
    });
  }
}
