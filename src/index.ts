
import * as fs from 'fs';
import { Armory} from './model/Armory.model';
import {Shire} from './model/Shire.model';
import {Army} from './model/Army.model';

var savedGame = fs.readFileSync("./data/Lords2.sav");
var myGame = {}


myGame['gold'] = savedGame.readInt32LE(84864);
// console.log('Gold: ' + savedGame.readInt32LE(84864));
myGame['iron'] = savedGame.readInt32LE(84872);
// console.log('Iron: ' + savedGame.readInt32LE(84872));
myGame['wood'] = savedGame.readInt32LE(84888);
// console.log('Wood: ' + savedGame.readInt32LE(84888));
myGame['stone'] = savedGame.readInt32LE(84880);
// console.log('Stone: ' + savedGame.readInt32LE(84880));

myGame['armory'] = new Armory(savedGame);

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
    const myShire = new Shire(savedGame, offset);
    myGame['shires'].push(myShire);
}

for (let i = 0, offset = 99760; i < 115; i++, offset += 420) {
    const myArmy = new Army(savedGame, offset);
    myGame['armies'].push(myArmy);

    console.log(offset);
}


console.log(`File Length: ${savedGame.length}`);

// console.log(myGame);
// console.log(myGame['armies'].length);


