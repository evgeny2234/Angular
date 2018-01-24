import { Component, OnInit, Input } from '@angular/core';
import { NgifelseComponent } from './../ngifelse/ngifelse.component';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

	@Input() carName: string;
	@Input() carID: number;

	newCar = "";
	indx = 0;
	cars = ['Ford', 'Audi', 'BMW'];
	items = [{id: 3, item: 'item1'}, {id: 7, item: 'item4'}, {id: 6, item: 'item9'}];

	addNewCar() {
		this.cars.push(this.newCar);
		this.newCar = "";
	}

	removeCar() {
		this.indx = this.cars.indexOf(this.newCar);
		delete this.cars[this.indx];
		this.newCar = "";
	}

}
