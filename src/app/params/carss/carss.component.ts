import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carss',
  templateUrl: './carss.component.html',
  styleUrls: ['./carss.component.css']
})
export class CarssComponent {

  constructor() { }

  carName = "";
  carYear = 2017;

  cars: [{name: string, year: number}] = [{
      name: "Ford",
      year: 2015,
    }, {
      name: "BMW",
      year: 2011,
    }, {
      name: "Audi",
      year: 2001,
    }];

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName='';
    this.carYear=0;
  }

}
