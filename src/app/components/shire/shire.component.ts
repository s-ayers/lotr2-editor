import { Component, OnInit, Input } from '@angular/core';
const ShireMap = require('../../../../shires.json');

@Component({
  selector: 'app-shire',
  templateUrl: './shire.component.html',
  styleUrls: ['./shire.component.css']
})
export class ShireComponent implements OnInit {
  @Input() shire: any;
  @Input() map: number;
  constructor() {}

  ngOnInit() {}

  getShireName(id: number): string {
    return ShireMap[this.map][id];
  }
}
