import { Component, OnInit } from '@angular/core';
import { SelectItem, FilterService, FilterMatchMode } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Lotr2 } from 'src/model/Lotr2.model';
import { FileService } from '../services/file.service';
import { Raw } from './raw.model';


@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  providers: [TableService, FilterService],
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {
  subscription: Subscription;
  game: any;
  fileNames: string[];
  bytes: Raw[] = [];
  cols: any[] = ['offset'];
  comparison: string = 'none';

  constructor(
    private service: FileService,
    private filterService: FilterService,
    public tableService: TableService
  ) {
    this.bytes = [];
    this.fileNames = [];
  }

  ngOnInit() {
    this.game = new Lotr2(null);
    this.subscription = this.service.getFiles().subscribe((files) => {


      if (files.length == 0 ) {
        return;
      }

      if (this.comparison == 'none') {
        this.raw(files);
      }
      if (this.comparison == 'diff-all') {
        this.diffAll(files);
      }
      if (this.comparison == 'linear-progression') {
        this.linear(files);
      }

    });

  }

  Region(offset: number) {
    return this.game.getRegion(offset);
  }

  protected linear(files: any[]) {
    const temp = {};
    this.fileNames = [files[0].file.name, files[1].file.name];
    for (let i = 0; i < 471828; i += 1) {
      const a = files[0].data.readUInt8(i);
      const b = files[1].data.readUInt8(i);
      if ((a + 1) === b) {
        temp[i] = [a, b];
      }
    }

    for (let i = 2; i < files.length; i += 1) {
      this.fileNames.push(files[i].file.name);

      for (const [key, value] of Object.entries(temp)) {
        const offset: number = parseInt(key, 10);

        if (offset < 471828) {
          const c = files[i].data.readUInt8(offset);

          if ( c !== (temp[key][i-1] + 1 )) {
            delete temp[key];
          } else {
            temp[key].push(c);
          }
        }
      }
    }

    this.bytes = [];
    for (const [key, values] of Object.entries(temp)) {
      const offset: number = parseInt(key, 10);
      const rawByte = new Raw();
      rawByte.offset = offset;
      rawByte.values = <number[]>values;

      this.bytes.push(rawByte);
    }
  }

  protected raw(files: any[]) {
    const temp = [];
    this.fileNames = [];
    files.forEach((file) => {
      const name = file.file.name;
      this.fileNames.push(name);
    });

    this.bytes = [];
    for (let i = 0; i < 471828; i += 1) {
      const rawByte = new Raw();
      rawByte.offset = i;

      files.forEach((file) => {
        const a = file.data.readUInt8(i);
        rawByte.values.push(a);
      });

      temp.push(rawByte);
    }

    this.bytes = temp;
    // for(const [key, values] of Object.entries(temp)) {
    //   const offset: number = parseInt(key, 10);
    //   this.diffs.push(values);
    // }
    // console.log(this.diffs);
  }

  protected diffAll(files: any[]) {
    const temp = {};
    this.fileNames = [files[0].file.name, files[1].file.name];
    for (let i = 0; i < 471828; i += 1) {
      const a = files[0].data.readUInt8(i);
      const b = files[1].data.readUInt8(i);
      if (a !== b) {
        temp[i] = [a, b];
      }
    }

    for (let i = 2; i < files.length; i += 1) {
      this.fileNames.push(files[i].file.name);

      for (const [key, value] of Object.entries(temp)) {
        const offset: number = parseInt(key, 10);

        // console.log(offset);
        // console.log(value);
        if (offset < 471828) {
          const c = files[i].data.readUInt8(offset);
          if ((value as number[]).includes(c)) {
            delete temp[key];
          } else {
            // console.log(Array.isArray(temp[key]));
            temp[key].push(c);
          }
        }
      }
    }

    this.bytes = [];
    for (const [key, values] of Object.entries(temp)) {
      const offset: number = parseInt(key, 10);
      const rawByte = new Raw();
      rawByte.offset = offset;
      rawByte.values = <number[]>values;

      this.bytes.push(rawByte);
    }
  }
}
