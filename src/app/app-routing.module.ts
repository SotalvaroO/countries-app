import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryFilterComponent } from './country/pages/country-filter/country-filter.component';
import { RegionFilterComponent } from './country/pages/region-filter/region-filter.component';
import { CapitalFilterComponent } from './country/pages/capital-filter/capital-filter.component';
import { CountryDetailComponent } from './country/pages/country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: CountryFilterComponent, pathMatch: 'full' },
  { path: 'region', component: RegionFilterComponent },
  { path: 'capital', component: CapitalFilterComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
