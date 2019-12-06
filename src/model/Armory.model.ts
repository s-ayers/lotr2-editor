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
        this.Pikes = buf.readUInt32LE(offset); offset += 4;
        this.Bows = buf.readInt32LE(offset); offset += 4;
        this.Knights = buf.readInt32LE(offset); offset += 4;
    }

    Compose(buf: Buffer, offset: number = 84904) {
        buf.writeInt32LE(this.Crossbows, offset); offset += 4;
        buf.writeInt32LE(this.Maces, offset); offset += 4;
        buf.writeInt32LE(this.Swords, offset); offset += 4;
        buf.writeInt32LE(this.Pikes, offset); offset += 4;
        buf.writeInt32LE(this.Bows, offset); offset += 4;
        buf.writeInt32LE(this.Knights, offset); offset += 4;
    }
}