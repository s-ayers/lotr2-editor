import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class FileService {
  private files= {};
  private subject: BehaviorSubject<object[]>;
  private active: BehaviorSubject<object>;

  constructor() {
    this.subject = new BehaviorSubject<object[]>([]);
    this.active = new BehaviorSubject<Object>({})

  }

  public add(file: File) {

    const reader = new FileReader();
    reader.onload = (e) => {
      const message = this.arrayBufferToWordArray(reader.result);
      const hash = CryptoJS.SHA256(message).toString();
      const data = Buffer.from(reader.result);

      if (!this.files.hasOwnProperty(hash)) {
        this.files[hash] = {file, data, hash};
        this.subject.next(Object.values(this.files));
        if (Object.keys(this.files).length === 1) {
          this.setActive(hash);
        }
      }
    };

    reader.readAsArrayBuffer(file);
  }

  public getFiles(): Observable<any> {
    return this.subject.asObservable();
  }

  public getActive(): Observable<any> {
    return this.active.asObservable();
  }

  public setActive(hash: string) {
    this.active.next(this.files[hash]);
  }

  private arrayBufferToWordArray(ab) {
    const i8a = new Uint8Array(ab);
    const a = [];
    for (let i = 0; i < i8a.length; i += 4) {
      a.push(i8a[i] << 24 | i8a[i + 1] << 16 | i8a[i + 2] << 8 | i8a[i + 3]);
    }
    return CryptoJS.lib.WordArray.create(a, i8a.length);
  }

}
