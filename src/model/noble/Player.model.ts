import { Armory } from '../Armory.model';
import { BaseModel } from '../BaseMode.model';
import { Inventory } from '../Inventory.model';
import { Property } from '../Property.model';
import { Color } from './Color.model';
import { PlayerName } from './PlayerName.mode';

export class Player extends BaseModel {
    offset = 84016;
    size = 902;

    constructor(buf: Buffer|null) {
        super();

        if (buf !== null) {
            this.children['Name'] = new Property(buf, 84016, 22, false, 'string');

            this.children['Color A'] = new Color(buf, 84049);
            this.children['Color B'] = new Color(buf, 84594);

            this.children['Inventory'] = new Inventory(buf, 84864);
            this.children['Armory'] = new Armory(buf);
        }


    }
}