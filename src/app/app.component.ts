import { Component, Output, EventEmitter } from '@angular/core';
import { FileSystemFileEntry } from 'ngx-file-drop';
import {Game} from '../model/Game.model';
var Buffer = require('buffer/').Buffer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lords of the Realm2 Editor';
  file: any = null;
  fileName: string = '';
  gameBuf: Buffer;
  game:any;
  @Output() valueUpdate = new EventEmitter(); 
  
  setFile(data) {
    this.file = data;
    this.fileName = this.file.name;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      let gBuf = Buffer.from(reader.result);
      this.game = Game.Parse(gBuf);
      console.log(this.game);
    };
    reader.readAsArrayBuffer(this.file);
    console.log(this.file);
  }
  
}
