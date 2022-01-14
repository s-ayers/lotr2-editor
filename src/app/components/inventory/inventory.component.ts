import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() inventory: any;


  constructor() { }

  ngOnInit() {

  }

}
