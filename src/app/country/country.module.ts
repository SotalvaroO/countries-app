import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalFilterComponent } from './pages/capital-filter/capital-filter.component';
import { CountryFilterComponent } from './pages/country-filter/country-filter.component';
import { RegionFilterComponent } from './pages/region-filter/region-filter.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    CapitalFilterComponent,
    CountryFilterComponent,
    RegionFilterComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryInputComponent,
  ],
  exports: [
    CapitalFilterComponent,
    CountryFilterComponent,
    RegionFilterComponent,
  ],
  imports: [CommonModule, FormsModule,RouterModule],
})
export class CountryModule {}
