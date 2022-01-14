import { BaseModel } from './BaseMode.model';
import { Color } from './noble/Color.model';
import { Name } from './noble/Name.model';
import { Property } from './Property.model';

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

export class Shire extends BaseModel {
    size = 768;

    id: number;

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
        super();

        const offset = OFFSET + (id * SIZE);
        this.offset = offset;

        if (id !== null) {
            this.id = id;
        }
        this.PlayerId = buf.readUInt8(offset + o.PLAYER_ID);
        this.children['Player Id'] = new Name(buf, (offset + o.PLAYER_ID));

        this.Color = buf.readUInt8(offset + o.COLOR);
        this.children['Color'] = new Color(buf, (offset + o.COLOR));

        this.Happiness = buf.readUInt8(offset + o.HAPPINESS);
        this.children['Happiness'] = new Property(buf, (offset + o.HAPPINESS));

        this.HappinessLastSeason = buf.readUInt8(offset + o.HAPPINESS_LAST);
        this.children['Happiness Last Season'] = new Property(buf, (offset + o.HAPPINESS_LAST));

        this.HappinessTaxLastSeason = buf.readInt8(offset + o.HAPPINESS_TAX_LAST);
        this.children['Happiness Tax LAst Season'] = new Property(buf, (offset + o.HAPPINESS_TAX_LAST));

        this.HappinessTax = buf.readInt8(offset + o.HAPPINESS_TAX);
        this.children['Happiness Tax'] = new Property(buf, (offset + o.HAPPINESS_TAX));


        this.Tax = buf.readUInt8(offset + o.TAX);
        this.children['Tax'] = new Property(buf, (offset + o.TAX));

        this.Revenue = buf.readUInt32LE(offset + o.REVENUE);
        this.children['Revenue'] = new Property(buf, (offset + o.REVENUE), 4);

        this.LaborIron = buf.readUInt32LE(offset + o.LABOR_IRON);
        this.children['Labor Iron'] = new Property(buf, (offset + o.LABOR_IRON), 4);

        this.LaborWood = buf.readUInt32LE(offset + o.LABOR_WOOD);
        this.children['Labor Wood'] = new Property(buf, (offset + o.LABOR_WOOD), 4);

        this.LaborCattle = buf.readUInt32LE(offset + o.LABOR_CATTLE);
        this.children['Labor Cattle'] = new Property(buf, (offset + o.LABOR_CATTLE), 4);


        this.Population = buf.readUInt32LE(offset + o.POPULATION);
        this.children['Population'] = new Property(buf, (offset + o.POPULATION), 4);

        this.Wheat_Unknown_1 = buf.readUInt32LE(offset + o.WHEAT_NEXT);

        this.Wheat = buf.readUInt32LE(offset + o.WHEAT_NOW);
        this.children['Wheat'] = new Property(buf, (offset + o.WHEAT_NOW), 4);

        this.Cows = buf.readUInt32LE(offset + o.COWS);
        this.children['Cows'] = new Property(buf, (offset + o.COWS), 4);

        this.CowsNext = buf.readInt32LE(offset + o.COWS_NEXT);
        this.children['Cows Next Season'] = new Property(buf, (offset + o.COWS_NEXT), 4);

        this.Iron = buf.readUInt16LE(offset + o.IRON_NEXT);
        this.children['Iron'] = new Property(buf, (offset + o.IRON_NEXT), 2);

        this.Forestry = buf.readInt8(offset + o.FORESTRY);
        this.children['Forestry'] = new Property(buf, (offset + o.FORESTRY));

        this.Mining = buf.readInt8(offset + o.MINING);
        this.children['Mining'] = new Property(buf, (offset + o.MINING));

        this.Wood = buf.readUInt16LE(offset + o.WOOD_NEXT);
        this.children['Wood'] = new Property(buf, (offset + o.WOOD_NEXT), 2);
    }

    Compose(buf: Buffer) {

        const offset =  OFFSET + (this.id * SIZE);

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
