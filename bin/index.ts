
import * as fs from 'fs';
import { Armory} from '../src/model/Armory.model';
import {Shire} from '../src/model/Shire.model';
import {Army} from '../src/model/Army.model';

var savedGame = fs.readFileSync("./data/england3.sav");
var myGame = {}


myGame['gold'] = savedGame.readInt32LE(84864);
myGame['iron'] = savedGame.readInt32LE(84872);
myGame['wood'] = savedGame.readInt32LE(84888);
myGame['stone'] = savedGame.readInt32LE(84880);

myGame['inventory'] = new Armory(savedGame);

myGame['shires'] = [];


myGame['players'] = [];
let mynameOffset = 84016;
let me = "";
let c = "";
do {
    c = savedGame.toString('ascii', mynameOffset, mynameOffset+1);
    if (c !== '\u0000') {
        me += c;
    }
    
    mynameOffset++

} while(c !== '\u0000');

myGame['players'].push(me);

myGame['armies'] = [];
for (let i = 0, offset = 87124; i < 16; i++, offset+=768) {
    const myShire = new Shire(savedGame, offset, i+1);
    myGame['shires'].push(myShire);
}

for (let i = 0, offset = 99760; i < 115; i++, offset += 420) {
    const myArmy = new Army(savedGame, offset);
    myGame['armies'].push(myArmy);

}




