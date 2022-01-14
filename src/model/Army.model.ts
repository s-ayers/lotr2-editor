import { BaseModel } from "./BaseMode.model";
import { Property } from "./Property.model";

const OFFSET = 99760; // 99735
// const OFFSET = 99735;
const SIZE = 420;
// army 10
// 103960
// const o = {
//   NAME: 0,
//   MOVEMENT_USED: 4,
//   MOVEMENT_TOTAL: 5,
//   WAGE: 13,
//   TOTAL: 25,
//   PEASANTS: 29,
//   CROSSBOW: 31,
//   MACE: 33,
//   SWORD: 35,
//   PIKE: 37,
//   BOW: 39,
//   KNIGHT: 41,

//   MERCENARIES_TYPE: 70,
//   MERCENARIES: 71,
//   MERCENARIES_RACE: 72,

//   CATAPULTS: 51,
//   CATAPULTS_PROGRESS: 53,
//   CATAPULTS_SEASONS: 56,
//   TOWERS: 57,
//   TOWERS_PROGRESS: 59,
//   TOWERS_SEASONS: 62,
//   RAMS: 63,
//   RAMS_PROGRESS: 65,
//   RAMS_SEASONS: 68,
// };

const o = {
  NAME: -25, // 0
  MOVEMENT_USED: -21, // 4
  MOVEMENT_TOTAL: -20, // 5
  WAGE: -12, // 13
  TOTAL: 0, // 25
  PEASANTS: 4, // 29
  CROSSBOW: 6, // 31
  MACE: 8, // 33
  SWORD: 10, // 35
  PIKE: 12, // 37
  BOW: 14, // 39
  KNIGHT: 16, // 41

  MERCENARIES_TYPE: 45, // 70
  MERCENARIES: 46, // 71
  MERCENARIES_RACE: 47, // 72

  CATAPULTS: 26, // 51
  CATAPULTS_PROGRESS: 28, // 53
  CATAPULTS_SEASONS: 31, // 56
  TOWERS: 32, // 57
  TOWERS_PROGRESS: 34, // 59
  TOWERS_SEASONS: 37, // 62
  RAMS: 38, // 63
  RAMS_PROGRESS: 40, // 65
  RAMS_SEASONS: 43 // 68
};

export class Army extends BaseModel {
  _id: number;
  total: number;
  peasants: number;
  crossbow: number;
  mace: number;
  sword: number;
  pike: number;
  bow: number;
  knight: number;
  has_moved: number;
  total_moves: number;
  mercenaries: number;
  mercenaryRace: number;
  mercenaryType: number;
  mercenaryWage: number;

  catapults: number;
  catapultsProgress: number;
  towers: number;
  towersProgress: number;
  rams: number;
  ramsProgress: number;

  name: number;

  unknown: number;

  constructor(buf: Buffer, id: number = 0) {
    super();

    this.offset = OFFSET + id * SIZE;
    const offset = this.offset;

    this._id = id;

    this.total = buf.readUInt32LE(offset + o.TOTAL);
    this.children['Total'] = new Property(buf, (offset + o.TOTAL), 4);

    this.peasants = buf.readUInt16LE(offset + o.PEASANTS);
    this.children['Peasants'] = new Property(buf, (offset + o.PEASANTS), 2);

    this.crossbow = buf.readUInt16LE(offset + o.CROSSBOW);
    this.children['Crossbow'] = new Property(buf, (offset + o.CROSSBOW), 2);

    this.mace = buf.readUInt16LE(offset + o.MACE);
    this.children['Mace'] = new Property(buf, (offset + o.MACE), 2);

    this.sword = buf.readUInt16LE(offset + o.SWORD);
    this.children['Sword'] = new Property(buf, (offset + o.SWORD), 2);

    this.pike = buf.readUInt16LE(offset + o.PIKE);
    this.children['Pike'] = new Property(buf, (offset + o.PIKE), 2);

    this.bow = buf.readUInt16LE(offset + o.BOW);
    this.children['Bow'] = new Property(buf, (offset + o.BOW), 2);

    this.knight = buf.readUInt16LE(offset + o.KNIGHT);
    this.children['Knight'] = new Property(buf, (offset + o.KNIGHT), 2);

    this.has_moved = buf.readUInt8(offset + o.MOVEMENT_USED);
    this.children['Has Moved'] = new Property(buf, (offset + o.MOVEMENT_USED), 1);

    this.mercenaryRace = buf.readUInt8(offset + o.MERCENARIES_RACE);
    this.children['Mercenary Race'] = new Property(buf, (offset + o.MERCENARIES_RACE));

    this.mercenaries = buf.readUInt8(offset + o.MERCENARIES);
    this.children['Mercenary'] = new Property(buf, (offset + o.MERCENARIES));

    this.mercenaryType = buf.readUInt8(offset + o.MERCENARIES_TYPE);
    this.children['Mercenary Type'] = new Property(buf, (offset + o.MERCENARIES_TYPE));

    this.mercenaryWage = buf.readUInt32LE(offset + o.WAGE);
    this.children['Mercenary Wage'] = new Property(buf, (offset + o.WAGE), 4);

    this.catapults = buf.readUInt8(offset + o.CATAPULTS);
    this.children['Catapults'] = new Property(buf, (offset + o.CATAPULTS));

    this.catapultsProgress = buf.readUInt8(offset + o.CATAPULTS_PROGRESS);
    this.children['Catapults Progress'] = new Property(buf, (offset + o.CATAPULTS_PROGRESS));

    this.towers = buf.readUInt8(offset + o.TOWERS);
    this.children['Towers'] = new Property(buf, (offset + o.TOWERS));

    this.towersProgress = buf.readUInt8(offset + o.TOWERS_PROGRESS);
    this.children['Towers Progress'] = new Property(buf, (offset + o.TOWERS_PROGRESS));

    this.rams = buf.readUInt8(offset + o.RAMS);
    this.children['Rams'] = new Property(buf, (offset + o.RAMS));

    this.ramsProgress = buf.readUInt8(offset + o.RAMS_PROGRESS);
    this.children['Rams Progress'] = new Property(buf, (offset + o.RAMS_PROGRESS));

    this.total_moves = buf.readUInt8(offset + o.MOVEMENT_TOTAL);
    this.children['Total Moves'] = new Property(buf, (offset + o.MOVEMENT_TOTAL));

    this.name = buf.readUInt8(offset + o.NAME);
    this.children['Name'] = new Property(buf, (offset + o.NAME));

  }

  Compose(buf: Buffer) {
    const offset = OFFSET + this._id * SIZE;

    buf.writeUInt32LE(this.total, offset + o.TOTAL);
    buf.writeUInt16LE(this.peasants, offset + o.PEASANTS);
    buf.writeUInt16LE(this.crossbow, offset + o.CROSSBOW);
    buf.writeUInt16LE(this.mace, offset + o.MACE);
    buf.writeUInt16LE(this.sword, offset + o.SWORD);
    buf.writeUInt16LE(this.pike, offset + o.PIKE);
    buf.writeUInt16LE(this.bow, offset + o.BOW);
    buf.writeUInt16LE(this.knight, offset + o.KNIGHT);
    buf.writeUInt8(this.has_moved, offset + o.MOVEMENT_USED);
    buf.writeUInt8(this.total_moves, offset + o.MOVEMENT_TOTAL);

    buf.writeUInt8(this.mercenaryRace, offset + o.MERCENARIES_RACE);
    buf.writeUInt8(this.mercenaries, offset + o.MERCENARIES);
    buf.writeUInt8(this.mercenaryType, offset + o.MERCENARIES_TYPE);
    buf.writeUInt32LE(this.mercenaryWage, offset + o.WAGE);

    buf.writeUInt8(this.catapults, offset + o.CATAPULTS);
    buf.writeUInt8(this.towers, offset + o.TOWERS);
    buf.writeUInt8(this.rams, offset + o.RAMS);

    buf.writeUInt8(this.name, offset + o.NAME);
  }

  sum() {
    const total =
      this.peasants +
      this.crossbow +
      this.mace +
      this.sword +
      this.pike +
      this.bow +
      this.knight +
      this.mercenaries;

    // if (total < 1) {
    //     this.peasants = 1;
    //     total = 1;
    // }

    this.total = total;

    return total;
  }
}
