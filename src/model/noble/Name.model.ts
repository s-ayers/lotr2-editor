import { Property } from '../Property.model';


const list = [
    'Self Governed',
    'The Player',
    'The Baron',
    'The Knight',
    'The Countess',
    'The Bishop'
];

export class Name extends Property {

    get label() {
        return list[this.value];
    }
}