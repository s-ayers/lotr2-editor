
import { Armory} from './Armory.model';
import {Shire} from './Shire.model';
import {Army} from './Army.model';
import { Inventory } from './Inventory.model';



export module Game {
    export function Parse(buf: Buffer): any {
        var myGame = {}

        
        myGame['inventory'] = new Inventory(buf);
        myGame['armory'] = new Armory(buf);
        
        myGame['shires'] = [];
        
        
        myGame['players'] = [];
        let mynameOffset = 84016;
        let me = "";
        let c = "";
        do {
            c = buf.toString('ascii', mynameOffset, mynameOffset+1);
            if (c !== '\u0000') {
                me += c;
            }
            
            mynameOffset++
        
        } while(c !== '\u0000');
        
        myGame['players'].push(me);
        
        myGame['armies'] = [];
        for (let i = 0, offset = 87124; i < 16; i++, offset+=768) {
            const myShire = new Shire(buf, offset, i);
            myGame['shires'].push(myShire);
        }
        
        for (let i = 0, offset = 99760; i < 115; i++, offset += 420) {
            const myArmy = new Army(buf, offset, i);
            myGame['armies'].push(myArmy);
        
            // console.log(offset);
        }
    
        
        return myGame;
    }

    export function Compose(buf: Buffer, Game: any) {
console.log(Game);

    Game.inventory.Compose(buf);
    Game.armory.Compose(buf);

    Game.armies.forEach(army => {
        army.Compose(buf);
    });

        return buf;
    }
}



