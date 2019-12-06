import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.css']
})
export class FileDropComponent {
  @Input() file: any;
  public files: NgxFileDropEntry[] = [];
  @Output() hasData: EventEmitter<any> = new EventEmitter();

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;

        fileEntry.file((file: File) => {
          this.hasData.emit(file);
          // Here you can access the real file
          // console.log(droppedFile.relativePath, file);
          // let reader = new FileReader();
          // reader.readAsArrayBuffer(file);
          // reader.onload = () => {
          //   const fileData = reader.result;
          //   console.log(fileData);
          //   this.file = fileData;
            
          // };

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

}
