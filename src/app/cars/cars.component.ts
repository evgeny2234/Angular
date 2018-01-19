import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

	
	addCarStatus = '';
	buttonText = 'Добавить машину';
	switch = false;
	inputText = "";

	constructor() {
	}

	onKeyUP (event) {
		this.inputText = (<HTMLInputElement>event.target).value;
	}

	onKeyUP2 (event) {
		if(event.code === "Enter") {
			this.inputText = (<HTMLInputElement>event.target).value;
		}
	}

	addCar() {
		this.switch = !this.switch;
		if(!this.switch) {
			this.addCarStatus = 'Машина добавлена';
			this.buttonText = 'Удалить машину';
		}
		else {
			this.addCarStatus = 'Машина удалена';
			this.buttonText = 'Добавить машину';
		}
	}

}
