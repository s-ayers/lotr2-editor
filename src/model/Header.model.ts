import { BaseModel } from "./BaseMode.model";
import { Name } from "./map/name.model";
import { Property } from "./Property.model";

export class Header extends BaseModel {
    offset = 0;
    size = 0;
    children: object = {};

    constructor(buf: Buffer) {
        super();

        // this.children['Map Name'] = new Name(buf, 264660);
    }
}