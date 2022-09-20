import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private API_URL: string = 'https://restcountries.com/v2/';

  constructor(private http: HttpClient) {}

  public getByCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_URL}/name/${name}`);
    /* .pipe(catchError((err) => of([]))) */ //Otra forma
  }
  public getByCapital(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_URL}/capital/${name}`);
    /* .pipe(catchError((err) => of([]))) */ //Otra forma
  }
  public getByAlpha(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.API_URL}/alpha/${id}`);
    /* .pipe(catchError((err) => of([]))) */ //Otra forma
  }

  public getByRegion(region: string): Observable<Country[]> {
    const params = new HttpParams().set(
      'fields',
      'name,capital,alpha2code,flag,population'
    );
    return this.http.get<Country[]>(`${this.API_URL}/region/${region}`, {
      params: params,
    });
  }
}
