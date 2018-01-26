import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent {

  constructor() { }

  tableLabel: string = '';
  tableYear: number = 2018;
  @Output() onAddTable = new EventEmitter<{label: string, year: number}>();

  addCar() {
    this.onAddTable.emit ({
      label: this.tableLabel,
      year: this.tableYear
    });

    this.tableLabel = '';
    this.tableYear = 0;
  }

}
