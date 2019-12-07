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

}
