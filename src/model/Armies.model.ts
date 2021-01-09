import { Army } from './Army.model';
import { BaseModel } from './BaseMode.model';

export class Armies extends BaseModel {
  offset = 99760;
  size = 48300;

  constructor(buf: Buffer, offset: number = 84904) {
    super();

    if (buf !== null) {
      for (let i = 0; i < 115; i += 1) {
        this.children[i] = new Army(buf, i);
      }
    }
  }
}
