import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  isDevMode,
  HostListener
} from '@angular/core';
import { FileSystemFileEntry } from 'ngx-file-drop';
import { Game } from '../model/Game.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from './services/file.service';

const Buffer = require('buffer/').Buffer;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'Lords of the Realm2 Editor';
  file: File = null;
  fileName = '';
  gameBuf: Buffer;
  game: any;
  @Output() valueUpdate = new EventEmitter();

  constructor(private http: HttpClient, private service: FileService) {

  }

  ngOnInit() {
    if (false && isDevMode()) {
      this.http
        .get('assets/game.sav', {
          observe: 'response',
          responseType: 'arraybuffer'
        })
        .subscribe((d) => {
          // let reader = new FileReader();
          // reader.readAsDataURL(d); // converts the blob to base64 and calls onload

          // this.gameBuf = Buffer.from(d.body);
          // this.game = Game.Parse(this.gameBuf);
          // this.fileName = 'game.sav';
        });
    }
  }

  @HostListener('window:drop', ['$event'])
  onDrop(event) {
    event.preventDefault();

    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === 'file') {
          const file = event.dataTransfer.items[i].getAsFile();

          this.service.add(file);
          this.setFile(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        // console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
        // console.log('isSprint: ' + this.isSprite(event.dataTransfer.files[i].name));
        // console.log('isPalette: ' + this.isPalette(event.dataTransfer.files[i]));
      }
    }
  }

  @HostListener('window:dragover', ['$event'])
  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  setFile(data) {
    this.file = data;
    this.fileName = this.file.name;

    const reader = new FileReader();

    reader.onload = (e) => {
      this.gameBuf = Buffer.from(reader.result);
      // this.game = Game.Parse(this.gameBuf);
    };
    reader.readAsArrayBuffer(this.file);
  }

  onSave(data: boolean) {
    const link = document.createElement('a');
    link.download = this.file.name;

    const blob = new Blob([Game.Compose(this.gameBuf, this.game)]);

    const reader = new FileReader();
    reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

    reader.onload = () => {
      link.href = reader.result.toString(); // data url

      link.click();
    };
  }

  onClearFile(data: boolean) {
    this.file = null;
    this.fileName = null;
    this.gameBuf = null;
  }

  onLoadDemo(data: boolean) {
    this.http
      .get('assets/game.sav', {
        observe: 'response',
        responseType: 'arraybuffer'
      })
      .subscribe((d) => {
        // let reader = new FileReader();
        // reader.readAsDataURL(d); // converts the blob to base64 and calls onload

        this.gameBuf = Buffer.from(d.body);
        // this.game = Game.Parse(this.gameBuf);
        this.fileName = 'game.sav';
      });
  }
}
