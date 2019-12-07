import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-army-list',
  templateUrl: './army-list.component.html',
  styleUrls: ['./army-list.component.css']
})
export class ArmyListComponent implements OnInit {

  @Input() armies: any;
  constructor() { }

  ngOnInit() {
  }

  manedArmies() {
    const mArmies = [];
    this.armies.forEach(army => {
      if (army.total > 0) {
        mArmies.push(army);
      }
    });
  
    return mArmies;
  }

}
