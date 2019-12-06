import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css']
})
export class ArmoryComponent implements OnInit {

  @Input() armory: any;

  Crossbows: number;
  Bows: number;
  Swords: number;
  Maces: number;
  Pikes: number;
  Knights: number;


  constructor() { }

  ngOnInit() {
    this.Crossbows = this.armory.Crossbows;
    this.Bows = this.armory.Bows;
    this.Swords = this.armory.Swords;
    this.Maces = this.armory.Maces;
    this.Pikes = this.armory.Pikes;
    this.Knights = this.armory.Knights;
  }

}
