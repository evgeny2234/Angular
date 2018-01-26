import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  constructor() { }

  /*carName = "Ford";
  carYear = "2017";

  getName() {
    return this.carName;
  }*/
  @Input('carItem') car: {name: string, year: number};

  private carItem = false;

}
