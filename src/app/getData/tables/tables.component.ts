import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  constructor() { }

  tables: [{label: string, year: number}] = [{
      label: 'qw334',
      year: 2014,
    }, {
      label: 'ddr17',
      year: 1997,
    }
  ];

  updateTableList(table: {label: string, year: number}) {
    this.tables.push(table);
  }

}
