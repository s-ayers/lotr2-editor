import { BaseModel } from './BaseMode.model';
import { Property } from './Property.model';

const o = {
    GOLD: 0,
    IRON: 8,
    STONE: 16,
    WOOD: 24
};

export class Inventory extends BaseModel {
    // offset = 84864;
    size = 332;

    children: object = {};

    Gold: number;
    Wood: number;
    Stone: number;
    Iron: number;

    constructor(buf: Buffer, offset) {
        super();
        this.offset = offset;
        this.Gold = buf.readInt32LE(offset + o.GOLD);
        this.Iron = buf.readInt32LE(offset + o.IRON);
        this.Stone = buf.readInt32LE(offset + o.STONE);
        this.Wood = buf.readInt32LE(offset + o.WOOD);

        this.children['Gold'] = new Property(buf, offset + o.GOLD, 4, true);
        this.children['Iron'] = new Property(buf, offset + o.IRON, 4, true);
        this.children['Stone'] = new Property(buf, offset + o.STONE, 4, true);
        this.children['Wood'] = new Property(buf, offset + o.WOOD, 4, true);
    }

    Compose(buf: Buffer) {
        buf.writeInt32LE(this.Gold, o.GOLD);
        buf.writeInt32LE(this.Iron, o.IRON);
        buf.writeInt32LE(this.Stone, o.STONE);
        buf.writeInt32LE(this.Wood, o.WOOD);
    }
}
