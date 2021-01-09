import { Property } from "../Property.model";


const list = [
    'Self Governed',
    'Red',
    'Yellow',
    'Black',
    'Purple',
    'Blue'
];
export class Color extends Property {

    get label() {
        return list[this.value];
    }
}