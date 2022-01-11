import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FileService } from '../../services/file.service';

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
  @Output() clear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() demo: EventEmitter<boolean> = new EventEmitter<boolean>();
  fileUrl: any = null;
  saved = false;

  subscription: Subscription;
  files: File[];
  _active: string;

  get active() {
    return this._active;
  }
  set active(value: string) {
    this.service.setActive(value);
    this._active = value;
  }
  constructor(private sanitizer: DomSanitizer, private service: FileService) { }

  ngOnInit() {

    this.subscription = this.service.getFiles().subscribe(files => {
      if (files) {
        if (files.length === 1) {
          this._active = files[0].hash;
        }
        this.files = files;
      } else {
        this.files = [];
      }
    });

  }

  saveGame() {

    this.save.emit(true);

  }

  clearFile() {
    this.clear.emit(true);
  }

  loadDemo() {
    this.demo.emit(true);
  }

}
