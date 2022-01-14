import { Armies } from './Armies.model';
import { Armory } from './Armory.model';
import { BaseModel } from './BaseMode.model';
import { Counties } from './Counties.model';
import { Header } from './Header.model';
import { Inventory } from './Inventory.model';
import { Player } from './noble/Player.model';
import { Map } from './map/map.model';
import { State } from './state.model';
import { Noble } from './noble/Noble.model';
import { Nobels } from './noble/Nobels.model';

export class Lotr2 extends BaseModel {
  offset = 0;
  size = 471828;

  children: object = {};

  constructor(buf: Buffer | null) {
    super();

    this.children['Nobles'] = new Nobels(buf);
    this.children['Armies'] = new Armies(buf);
    this.children['Counties'] = new Counties(buf);

    this.children['Map'] = new Map(buf);

    this.children['State'] = new State(buf);
  }

  regionPercent() {
    let knownRegions = 0;

    const children = Object.values(this.children);
    if (children.length) {
        children.forEach(child => {
            knownRegions += child.size;
        })
    }

    return ((knownRegions / this.size) * 100).toFixed(2);
  }

  getRegion(offset: number) {
    for (const [key, value] of Object.entries(this.children)) {
      if (offset >= value.offset && offset <= value.offset + value.size) {
        return key;
      }
    }

    return 'Unknown';
  }
}
