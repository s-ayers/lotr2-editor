import { Component, OnInit, Input } from '@angular/core';
const ShireMap = require('../../../shires.json');

@Component({
  selector: 'app-shire',
  templateUrl: './shire.component.html',
  styleUrls: ['./shire.component.css']
})
export class ShireComponent implements OnInit {
  @Input() shire: any;
  constructor() {}

  ngOnInit() {}

  getShireName(id: number): string {
    return ShireMap['scotland'][id];
  }
}
