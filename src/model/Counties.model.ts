import { BaseModel } from './BaseMode.model';
import { Shire } from './Shire.model';

export class Counties extends BaseModel {
  offset = 87124;
  size = 15360;

  constructor(buf: Buffer) {
    super();

    if (buf !== null) {
      for (let i = 0; i < 20; i += 1) {
        this.children[i] = new Shire(buf, i);
      }
    }
  }
}
