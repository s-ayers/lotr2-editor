import { BaseModel } from "../BaseMode.model";
import { Name } from "./name.model";

export class Map extends BaseModel {
    offset = 264660;
    size = 1;

    constructor(buf: Buffer|null) {
        super();

        if (buf !== null) {
            this.children['Map Name'] = new Name(buf, this.offset);
        }

    }
}