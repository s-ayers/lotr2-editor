import { BaseModel } from '../BaseMode.model';
import { Noble } from './Noble.model';
import { Player } from './Player.model';


export class Nobels extends BaseModel {
    offset = 84016;
    size = 2310;

    constructor(buf: Buffer) {
        super();

        this.children['Player'] = new Player(buf);
        this.children['Npc 1'] = new Noble(buf, 84943); // 85572
        this.children['Npc 2'] = new Noble(buf, 85295); // 85572 // 85292 // 85641
        this.children['Npc 3'] = new Noble(buf, 85647); // 85572
        this.children['Npc 4'] = new Noble(buf, 85999); // 85572
    }
}