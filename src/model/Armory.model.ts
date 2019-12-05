export class Armory {
    Crossbows = 0;
    Maces = 0;
    Swords = 0;
    Pikes = 0;
    Bows = 0;
    Knights = 0;
    
    constructor(buf: Buffer, offset: number = 84904){
        this.Crossbows = buf.readInt32LE(offset); offset += 4;
        this.Maces = buf.readInt32LE(offset); offset += 4;
        this.Swords = buf.readInt32LE(offset); offset += 4;
        this.Bows = buf.readInt32LE(offset); offset += 4;
        this.Knights = buf.readInt32LE(offset); offset += 4;
    }
}