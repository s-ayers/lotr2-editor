import { isNull } from "util";

const OFFSET = 87124;
const SIZE = 768;

const o =  {
    POPULATION: 24,
    COWS: 580,
    HAPPINESS: 0,
    WHEAT_UK_1: 372,
    WHEAT_UK_2: 536
}

export class Shire {
    _id: number;

    Happiness: number;
    Unknown_1: number;
    Unknown_2: number;
    Unknown_3: number;
    Unknown_4: number;
    Unknown_5: number;
    Unknown_6: number;
    Unknown_7: number;

    Population: number;
    Wheat_Unknown_1: number;
    Wheat_Unknown_2: number;
    Cows: number;

    constructor(buf: Buffer, offset: number = OFFSET, id: number = null) {
        if (!isNull(id)) {
            this._id = id;
        }
        this.Happiness = buf.readUInt8(offset + o.HAPPINESS);

        this.Unknown_1 = buf.readUInt32LE(offset + 1);
        this.Unknown_2 = buf.readUInt32LE(offset + 5);
        this.Unknown_3 = buf.readUInt32LE(offset + 9);
        this.Unknown_4 = buf.readUInt32LE(offset + 13);
        this.Unknown_5 = buf.readUInt32LE(offset + 17);
        this.Unknown_6 = buf.readUInt32LE(offset + 21);
        this.Unknown_7 = buf.readUInt32LE(offset + 25);

        this.Population = buf.readUInt32LE(offset + o.POPULATION);
        this.Wheat_Unknown_1 = buf.readUInt32LE(offset + o.WHEAT_UK_1);
        this.Wheat_Unknown_2 = buf.readUInt32LE(offset + o.WHEAT_UK_2);

        this.Cows = buf.readUInt32LE(offset + o.COWS);
    }

    Compose(buf: Buffer) {

        const offset =  OFFSET + (this._id * SIZE);

        buf.writeInt8(this.Happiness, offset + o.HAPPINESS);
        buf.writeUInt32LE(this.Population, offset + o.POPULATION);
        buf.writeUInt32LE(this.Cows, offset + o.COWS);

    }
}