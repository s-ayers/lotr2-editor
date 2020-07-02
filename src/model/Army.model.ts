const OFFSET = 99760;
const SIZE = 420;
// army 10
// 103960
const o = {
    NAME: -25,
    MOVEMENT_USED: -21,
    MOVEMENT_TOTAL: -20,
    WAGE: -12,
    TOTAL: 0,
    PEASANTS: 4,
    CROSSBOW: 6,
    MACE: 8,
    SWORD: 10,
    PIKE: 12,
    BOW: 14,
    KNIGHT: 16,


    MERCENARIES_TYPE: 45,
    MERCENARIES: 46,
    MERCENARIES_RACE: 47,

    CATAPULTS: 26,
    CATAPULTS_PROGRESS: 28,
    CATAPULTS_SEASONS: 31,
    TOWERS: 32,
    TOWERS_PROGRESS: 34,
    TOWERS_SEASONS: 37,
    RAMS: 38,
    RAMS_PROGRESS: 40,
    RAMS_SEASONS: 43
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
        this.has_moved = buf.readUInt8(offset + o.MOVEMENT_USED);

        this.mercenaryRace = buf.readUInt8(offset + o.MERCENARIES_RACE);
        this.mercenaries = buf.readUInt8(offset + o.MERCENARIES);
        this.mercenaryType = buf.readUInt8(offset + o.MERCENARIES_TYPE);
        this.mercenaryWage = buf.readUInt32LE(offset + o.WAGE);

        this.catapults = buf.readUInt8(offset + o.CATAPULTS);
        this.catapultsProgress = buf.readUInt8(offset + o.CATAPULTS_PROGRESS);
        this.towers = buf.readUInt8(offset + o.TOWERS);
        this.towersProgress = buf.readUInt8(offset + o.TOWERS_PROGRESS);
        this.rams = buf.readUInt8(offset + o.RAMS);
        this.ramsProgress = buf.readUInt8(offset + o.RAMS_PROGRESS);
        this.total_moves = buf.readUInt8(offset + o.MOVEMENT_TOTAL);

        this.name = buf.readUInt8(offset + o.NAME);

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
        let total = this.peasants + this.crossbow + this.mace + this.sword + this.pike + this.bow + this.knight + this.mercenaries;

        // if (total < 1) {
        //     this.peasants = 1;
        //     total = 1;
        // }   

        this.total = total;

        return total;
    }
}