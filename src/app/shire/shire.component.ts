import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shire',
  templateUrl: './shire.component.html',
  styleUrls: ['./shire.component.css']
})
export class ShireComponent implements OnInit {

  @Input() shire: any;
  constructor() { }

  ngOnInit() {
  }

}
