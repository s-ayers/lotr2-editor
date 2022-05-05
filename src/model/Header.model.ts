import { BaseModel } from './BaseMode.model';

export class Header extends BaseModel {
    offset = 0;
    size = 0;
    children: object = {};

    constructor(buf: Buffer) {
        super();
    }
}