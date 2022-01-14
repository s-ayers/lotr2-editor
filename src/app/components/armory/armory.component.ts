import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css']
})
export class ArmoryComponent implements OnInit {

  @Input() armory: any;



  constructor() { }

  ngOnInit() {

  }


}
