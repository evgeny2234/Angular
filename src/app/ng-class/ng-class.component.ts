import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  constructor() { }

  names = ['Yevhenii', 'Vlad', 'Viktor', 'Arsen', 'Ivan'];

  setBigCarText(name) {
    return name.length > 4 ? true : false;
  }
}
