const OFFSET = 99760;
const SIZE = 420;

const o = {
    TOTAL: 0,
    PEASANTS: 4,
    CROSSBOW: 6,
    MACE: 8,
    SWORD: 10,
    PIKE: 12,
    BOW: 14,
    KNIGHT: 16,
    HAS_MOVED: 0
}

export class Army {
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

    constructor(buf: Buffer, offset: number = OFFSET, id: number = 0) {
        this._id = id;
        this.total = buf.readUInt32LE(offset + o.TOTAL)
        this.peasants = buf.readUInt16LE(offset + o.PEASANTS);
        this.crossbow = buf.readUInt16LE(offset + o.CROSSBOW);
        this.mace = buf.readUInt16LE(offset + o.MACE);
        this.sword = buf.readUInt16LE(offset + o.SWORD);
        this.pike = buf.readUInt16LE(offset + o.PIKE);
        this.bow = buf.readUInt16LE(offset + o.BOW);
        this.knight = buf.readUInt16LE(offset + o.KNIGHT);
    }

    Compose(buf: Buffer) {

        let offset = OFFSET + (this._id * SIZE); 

        buf.writeUInt32LE(this.total, offset + o.TOTAL)
        buf.writeUInt16LE(this.peasants, offset + o.PEASANTS);
        buf.writeUInt16LE(this.crossbow, offset + o.CROSSBOW);
        buf.writeUInt16LE(this.mace, offset + o.MACE);
        buf.writeUInt16LE(this.sword, offset + o.SWORD);
        buf.writeUInt16LE(this.pike, offset + o.PIKE);
        buf.writeUInt16LE(this.bow, offset + o.BOW);
        buf.writeUInt16LE(this.knight, offset + o.KNIGHT);

    }

    sum() {
        let total = this.peasants + this.crossbow + this.mace + this.sword + this.pike + this.bow + this.knight;

        // if (total < 1) {
        //     this.peasants = 1;
        //     total = 1;
        // }   

        this.total = total;

        return total;
    }
}