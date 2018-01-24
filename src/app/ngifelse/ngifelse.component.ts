import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent {

	carName = "Name";
	carID = "ID";
	carNameClick = "";


    constructor() {

    }

    addCar(event) {
    	this.carNameClick = this.carName;
    }

}
