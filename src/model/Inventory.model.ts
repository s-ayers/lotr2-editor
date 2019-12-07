export class Inventory {
    Gold = 0;
    Wood = 0;
    Stone = 0;
    Iron = 0;

    constructor(buf: Buffer) {
        this.Gold = buf.readInt32LE(84864);
        this.Iron = buf.readInt32LE(84872);
        this.Wood = buf.readInt32LE(84888);
        this.Stone = buf.readInt32LE(84880);
    }

    Compose(buf: Buffer) {
        buf.writeInt32LE(this.Gold, 84864);
        buf.writeInt32LE(this.Iron, 84872);
        buf.writeInt32LE(this.Wood, 84888);
        buf.writeInt32LE(this.Stone, 84880);
    }
}