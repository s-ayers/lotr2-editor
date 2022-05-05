import { BaseModel } from '../BaseMode.model';
import { NpcName } from './NpcName.model';
import { Color } from './Color.model';
import { Inventory } from '../Inventory.model';
import { Armory } from '../Armory.model';

export class Noble extends BaseModel {
    size = 352;

    constructor(buf: Buffer|null, offset: number) {
        super();
        this.offset = offset
        if (buf !== null) {
            this.children['Name'] = new NpcName(buf, offset);
            this.children['Color'] = new Color(buf, offset + 3);

            this.children['Inventory'] = new Inventory(buf, offset + 273); //85216 85572
            this.children['Armory'] = new Armory(buf, offset + 313);
        }


    }
}