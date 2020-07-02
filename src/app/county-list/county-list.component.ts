import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.css']
})
export class CountyListComponent implements OnInit {
  @Input() shires: any;
  constructor() { }

  ngOnInit() {
  }

  england(id: number):string {
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
      'Yorkshire',
    ];

    return counties[id] || id.toString();
  }
}
