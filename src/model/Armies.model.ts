import { Army } from './Army.model';
import { BaseModel } from './BaseMode.model';

export class Armies extends BaseModel {
  offset = 87844;
  size = 107100;

  constructor(buf: Buffer, offset: number = 87844) {
    super();

    if (buf !== null) {
      for (let i = 0; i < 255; i += 1) {
        this.children[i] = new Army(buf, i);
      }
    }
  }
}
