import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {
  @Input() army: any;
  constructor() { }

  ngOnInit() {
  }

}
