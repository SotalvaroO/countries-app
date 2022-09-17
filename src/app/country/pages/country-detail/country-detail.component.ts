import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
})
export class CountryDetailComponent implements OnInit {
  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getByAlpha(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country;
      });

    /* this.activatedRoute.params.subscribe(({ id }) => {
      this.countryService
        .getByAlpha(id)
        .subscribe((country) => console.log(country));
    }); */
  }
}
