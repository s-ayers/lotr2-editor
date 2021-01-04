const OFFSET = 84864;
const SIZE = 332;

const o = {
    GOLD: 84864,
    IRON: 84872,
    STONE: 84880,
    WOOD: 84888
};

export class Inventory {
    Gold: number;
    Wood: number;
    Stone: number;
    Iron: number;

    constructor(buf: Buffer) {
        this.Gold = buf.readInt32LE(o.GOLD);
        this.Iron = buf.readInt32LE(o.IRON);
        this.Stone = buf.readInt32LE(o.STONE);
        this.Wood = buf.readInt32LE(o.WOOD);
    }

    Compose(buf: Buffer) {
        buf.writeInt32LE(this.Gold, o.GOLD);
        buf.writeInt32LE(this.Iron, o.IRON);
        buf.writeInt32LE(this.Stone, o.STONE);
        buf.writeInt32LE(this.Wood, o.WOOD);
    }
}
