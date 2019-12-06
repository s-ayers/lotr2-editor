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
    
    total: number;
    peasants: number;
    crossbow: number;
    mace: number;
    sword: number;
    pike: number;
    bow: number;
    knight: number;
    has_moved: number;

    constructor(buf: Buffer, offset: number) {

        this.total = buf.readUInt32LE(offset + o.TOTAL)
        this.peasants = buf.readUInt16LE(offset + o.PEASANTS);
        this.crossbow = buf.readUInt16LE(offset + o.CROSSBOW);
        this.mace = buf.readUInt16LE(offset + o.MACE);
        this.sword = buf.readUInt16LE(offset + o.SWORD);
        this.pike = buf.readUInt16LE(offset + o.PIKE);
        this.bow = buf.readUInt16LE(offset + o.BOW);
        this.knight = buf.readUInt16LE(offset + o.KNIGHT);
    }
}