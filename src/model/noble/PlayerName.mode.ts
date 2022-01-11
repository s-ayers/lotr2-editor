import { BaseModel } from "../BaseMode.model";

export class PlayerName extends BaseModel {
 offset = 84016;
 size = 16;

 constructor(buf: Buffer){
     super();
 }
}