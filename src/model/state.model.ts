import { BaseModel } from './BaseMode.model';
import { Property } from './Property.model';

export class State extends BaseModel {
  offset = 262720;
  size = 148;

  constructor(buf: Buffer) {
    super();
    if (buf) {
      this.children['Turn A'] = new Property(buf, 262720, 2);
      this.children['Turn B'] = new Property(buf, 262860, 2);
      this.children['Turn C'] = new Property(buf, 262868, 2);
    }
  }
}
