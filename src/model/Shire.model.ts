import { isNull } from 'util';
// 92680
// 471828
const OFFSET = 87124;
const SIZE = 768;

const o =  {
    PLAYER_ID: -7,
    COLOR: -5,
    HAPPINESS: 0,
    HAPPINESS_LAST: 1,
    HAPPINESS_TAX_LAST: 2,
    HAPPINESS_TAX: 3,

    HAPPINESS_AVG: 555555555,
    POPULATION: 24,
    TAX: 173,
    REVENUE: 180,
    LABOR_IRON: 232,
    LABOR_WOOD: 256,
    LABOR_CATTLE: 288,
    COWS: 580,
    COWS_NEXT: 588,
    WHEAT_NEXT: 372,
    WHEAT_NOW: 536,
    FORESTRY: 651,
    WOOD_NEXT: 668,
    MINING: 675,
    IRON_NEXT: 692
};

export class Shire {
    _id: number;

    PlayerId: number;
    Color: number;
    Happiness: number;
    HappinessLastSeason: number;
    HappinessTaxLastSeason: number;
    HappinessTax: number;


    Population: number;
    Tax: number;
    Revenue: number;
    Wheat_Unknown_1: number;
    Wheat: number;
    Cows: number;
    CowsNext: number;
    Forestry: number;
    Iron: number;
    Mining: number;
    Wood: number;
    LaborWood: number;
    LaborIron: number;
    LaborCattle: number;

    constructor(buf: Buffer, id: number = null) {
        const offset = OFFSET + (id * SIZE);
        if (!isNull(id)) {
            this._id = id;
        }
        this.PlayerId = buf.readUInt8(offset + o.PLAYER_ID);
        this.Color = buf.readUInt8(offset + o.COLOR);
        this.Happiness = buf.readUInt8(offset + o.HAPPINESS);
        this.HappinessLastSeason = buf.readUInt8(offset + o.HAPPINESS_LAST);
        this.HappinessTaxLastSeason = buf.readInt8(offset + o.HAPPINESS_TAX_LAST);
        this.HappinessTax = buf.readInt8(offset + o.HAPPINESS_TAX);


        this.Tax = buf.readUInt8(offset + o.TAX);
        this.Revenue = buf.readUInt32LE(offset + o.REVENUE);
        this.LaborIron = buf.readUInt32LE(offset + o.LABOR_IRON);
        this.LaborWood = buf.readUInt32LE(offset + o.LABOR_WOOD);
        this.LaborCattle = buf.readUInt32LE(offset + o.LABOR_CATTLE);

        // this.Unknown_1 = buf.readUInt32LE(offset + 1);
        // this.Unknown_2 = buf.readUInt32LE(offset + 5);
        // this.Unknown_3 = buf.readUInt32LE(offset + 9);
        // this.Unknown_4 = buf.readUInt32LE(offset + 13);
        // this.Unknown_5 = buf.readUInt32LE(offset + 17);
        // this.Unknown_6 = buf.readUInt32LE(offset + 21);
        // this.Unknown_7 = buf.readUInt32LE(offset + 25);

        this.Population = buf.readUInt32LE(offset + o.POPULATION);
        this.Wheat_Unknown_1 = buf.readUInt32LE(offset + o.WHEAT_NEXT);
        this.Wheat = buf.readUInt32LE(offset + o.WHEAT_NOW);

        this.Cows = buf.readUInt32LE(offset + o.COWS);
        this.CowsNext = buf.readInt32LE(offset + o.COWS_NEXT);
        this.Iron = buf.readUInt16LE(offset + o.IRON_NEXT);
        this.Forestry = buf.readInt8(offset + o.FORESTRY);
        this.Mining = buf.readInt8(offset + o.MINING);
        this.Wood = buf.readUInt16LE(offset + o.WOOD_NEXT);
    }

    Compose(buf: Buffer) {

        const offset =  OFFSET + (this._id * SIZE);

        buf.writeUInt8(this.PlayerId, offset + o.PLAYER_ID);
        buf.writeUInt8(this.Color, offset + o.COLOR);

        buf.writeInt8(this.Happiness, offset + o.HAPPINESS);
        buf.writeUInt32LE(this.Population, offset + o.POPULATION);
        buf.writeUInt32LE(this.Cows, offset + o.COWS);
        buf.writeInt32LE(this.CowsNext, offset + o.COWS_NEXT);
        buf.writeUInt16LE(this.Iron, offset + o.IRON_NEXT);
        buf.writeUInt16LE(this.Wood, offset + o.WOOD_NEXT);

    }
}
