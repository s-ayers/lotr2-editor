import { Component, Output, EventEmitter } from '@angular/core';
import { FileSystemFileEntry } from 'ngx-file-drop';
import { Game } from '../model/Game.model';
var Buffer = require('buffer/').Buffer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lords of the Realm2 Editor';
  file: File = null;
  fileName: string = '';
  gameBuf: Buffer;
  game: any;
  @Output() valueUpdate = new EventEmitter();

  setFile(data) {
    this.file = data;
    this.fileName = this.file.name;

    const reader = new FileReader();

    reader.onload = (e) => {
      this.gameBuf = Buffer.from(reader.result);
      this.game = Game.Parse(this.gameBuf);
    };
    reader.readAsArrayBuffer(this.file);
  }

  onSave(data: boolean) {

    let link = document.createElement('a');
    link.download = this.file.name;

    let blob = new Blob([ Game.Compose(this.gameBuf, this.game)]);

    let reader = new FileReader();
    reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

    reader.onload = function () {

      link.href = reader.result.toString(); // data url

      link.click();
    };


  }

}
