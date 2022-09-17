import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styles: [],
})
export class CountryListComponent implements OnInit {
  @Input()
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}
}
