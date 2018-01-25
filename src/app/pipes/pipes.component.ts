import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  constructor() { }

  dates = [
    new Date(2016, 4, 6).toDateString(),
    new Date(2018, 1, 2).toDateString(),
    new Date(2017, 3, 6).toDateString(),
    new Date(2013, 5, 2).toDateString(),
    new Date(2011, 8, 6).toDateString(),
    new Date(2015, 1, 1).toDateString()
  ];

}
