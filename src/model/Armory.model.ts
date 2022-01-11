import { BaseModel } from "./BaseMode.model";
import { Property } from "./Property.model";

export class Armory extends BaseModel {
  // offset = 84904;
  size = 24;
//         84016
  Crossbows = 0;
  Maces = 0;
  Swords = 0;
  Pikes = 0;
  Bows = 0;
  Knights = 0;

  constructor(buf: Buffer, offset: number = 84904) {
    super();
    this.offset = offset;
    this.Crossbows = buf.readInt32LE(offset);
    this.children['Crossbows'] = new Property(buf, offset, 4, true);
    offset += 4;

    this.Maces = buf.readInt32LE(offset);
    this.children['Maces'] = new Property(buf, offset, 4, true);
    offset += 4;

    this.Swords = buf.readInt32LE(offset);
    this.children['Swords'] = new Property(buf, offset, 4, true);
    offset += 4;

    this.Pikes = buf.readUInt32LE(offset);
    this.children['Pikes'] = new Property(buf, offset, 4, true);
    offset += 4;

    this.Bows = buf.readInt32LE(offset);
    this.children['Bows'] = new Property(buf, offset, 4, true);
    offset += 4;

    this.Knights = buf.readInt32LE(offset);
    this.children['Knights'] = new Property(buf, offset, 4, true);
    offset += 4;
  }

  Compose(buf: Buffer, offset: number = 84904) {
    buf.writeInt32LE(this.Crossbows, offset);
    offset += 4;
    buf.writeInt32LE(this.Maces, offset);
    offset += 4;
    buf.writeInt32LE(this.Swords, offset);
    offset += 4;
    buf.writeInt32LE(this.Pikes, offset);
    offset += 4;
    buf.writeInt32LE(this.Bows, offset);
    offset += 4;
    buf.writeInt32LE(this.Knights, offset);
    offset += 4;
  }
}
