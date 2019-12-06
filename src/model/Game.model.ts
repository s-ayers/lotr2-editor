
import { Armory} from './Armory.model';
import {Shire} from './Shire.model';
import {Army} from './Army.model';



export module Game {
    export function Parse(buf: Buffer): any {
        var myGame = {}
        myGame['gold'] = buf.readInt32LE(84864);
        // console.log('Gold: ' + buf.readInt32LE(84864));
        myGame['iron'] = buf.readInt32LE(84872);
        // console.log('Iron: ' + buf.readInt32LE(84872));
        myGame['wood'] = buf.readInt32LE(84888);
        // console.log('Wood: ' + buf.readInt32LE(84888));
        myGame['stone'] = buf.readInt32LE(84880);
        // console.log('Stone: ' + buf.readInt32LE(84880));
        
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
            const myShire = new Shire(buf, offset, i+1);
            myGame['shires'].push(myShire);
        }
        
        for (let i = 0, offset = 99760; i < 115; i++, offset += 420) {
            const myArmy = new Army(buf, offset);
            myGame['armies'].push(myArmy);
        
            // console.log(offset);
        }
    
        
        return myGame;
    }
}



