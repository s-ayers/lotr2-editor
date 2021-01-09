import { Property } from "../Property.model";


const list = [
    'The Player',
    'The Knight',
    'The Baron',
    'The Countess',
    'The Bishop'
];

export class NpcName extends Property {

    get label() {
        return list[this.value];
    }
}