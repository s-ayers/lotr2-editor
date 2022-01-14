import { Component, OnInit, Input } from '@angular/core';
const ShireMap = require('../../../../shires.json');

@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.css']
})
export class CountyListComponent implements OnInit {
  @Input() shires: any;
  @Input() map: number;

  constructor() {}

  ngOnInit() {}

  countyName(id: number) {
    return ShireMap[this.map][id]|| id.toString();;
  }
  england(id: number): string {
    const counties = [
      'Duchy of Cornwall',
      'Wiltshire',
      'Hampshire',
      'Kent',
      'Duchy of Norfolk',
      'Royal counties',
      'Gloucestershire',
      'Dyfed',
      'Caernarvon',
      'Staffordshire',
      'Lincolnshire',
      'Nottinghamshire',
      'Lancashire',
      'Yorkshire'
    ];

    return counties[id] || id.toString();
  }
}
