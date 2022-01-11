import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shire-grid',
  templateUrl: './shire-grid.component.html',
  styleUrls: ['./shire-grid.component.css']
})
export class ShireGridComponent implements OnInit {

  @Input() shires: any;
  @Input() map: number;

  constructor() {}

  ngOnInit() {}


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
