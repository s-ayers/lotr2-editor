import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;
  @Input() file: File;
  @Input() buf: Buffer;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
  fileUrl: any = null;
  saved: boolean = false;

  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {

  }

  saveGame() {

    this.save.emit(true);

  }

}
