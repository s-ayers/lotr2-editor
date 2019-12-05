
const o =  {
    POPULATION: 24,
    COWS: 580,
    HAPPINESS: 0
}

export class Shire {

    Happiness: number;
    Unknown_1: number;
    Unknown_2: number;
    Unknown_3: number;
    Unknown_4: number;
    Unknown_5: number;
    Unknown_6: number;
    Unknown_7: number;

    Population: number;
    Cows: number;

    constructor(buf: Buffer, offset: number = 87124) {
        this.Happiness = buf.readUInt8(offset + o.HAPPINESS);

        this.Unknown_1 = buf.readUInt32LE(offset + 1);
        this.Unknown_2 = buf.readUInt32LE(offset + 5);
        this.Unknown_3 = buf.readUInt32LE(offset + 9);
        this.Unknown_4 = buf.readUInt32LE(offset + 13);
        this.Unknown_5 = buf.readUInt32LE(offset + 17);
        this.Unknown_6 = buf.readUInt32LE(offset + 21);
        this.Unknown_7 = buf.readUInt32LE(offset + 25);

        this.Population = buf.readUInt32LE(offset + o.POPULATION);
        this.Cows = buf.readUInt32LE(offset + o.COWS)
    }
}