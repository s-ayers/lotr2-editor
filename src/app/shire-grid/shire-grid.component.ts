import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shire-grid',
  templateUrl: './shire-grid.component.html',
  styleUrls: ['./shire-grid.component.css']
})
export class ShireGridComponent implements OnInit {

  @Input() shires: any;
  constructor() { }

  ngOnInit() {
  }

}
