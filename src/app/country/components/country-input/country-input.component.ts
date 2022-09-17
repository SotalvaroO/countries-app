import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Input()
  public filterType: string = '';
  @Output()
  public onEnter: EventEmitter<string> = new EventEmitter();
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject();

  public word: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  public search() {
    this.onEnter.emit(this.word); //La mejor solucion es usar Output

    /* if (!this.word) return;
    this.isFailedResponse = false;
    this.countryService.getByCountry(this.word).subscribe(
      (countries) => {
        this._countries = countries;
      },
      (error) => {
        this.isFailedResponse = true;
        this._countries = [];
      }
    ); */
  }

  public keyPressed() {
    //El event es opcional
    this.debouncer.next(this.word);
  }
}
