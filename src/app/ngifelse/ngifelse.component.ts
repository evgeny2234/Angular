import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent {

	carName = "";
	addCarStatus = false;

    constructor() {

    }

    addCar() {
    	this.addCarStatus = true;
    }

}
