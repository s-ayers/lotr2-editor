import { Armory } from './Armory.model';
import { Shire } from './Shire.model';
import { Army } from './Army.model';
import { Inventory } from './Inventory.model';

export namespace Game {
  export function Parse(buf: Buffer): any {
    const myGame = {};

    myGame['inventory'] = new Inventory(buf);
    myGame['armory'] = new Armory(buf);

    myGame['shires'] = [];

    myGame['players'] = [];
    let mynameOffset = 84016;
    let me = '';
    let c = '';
    do {
      c = buf.toString('ascii', mynameOffset, mynameOffset + 1);
      if (c !== '\u0000') {
        me += c;
      }

      mynameOffset++;
    } while (c !== '\u0000');

    myGame['players'].push(me);

    myGame['armies'] = [];
    for (let i = 0; i < 16; i++) {
      const myShire = new Shire(buf, i);
      myGame['shires'].push(myShire);
    }

    for (let i = 0; i < 115; i++) {
      const myArmy = new Army(buf, i);
      myGame['armies'].push(myArmy);
    }

    return myGame;
  }

  export function Compose(buf: Buffer, Game: any) {
    Game.inventory.Compose(buf);
    Game.armory.Compose(buf);

    Game.armies.forEach((army) => {
      army.Compose(buf);
    });

    Game.shires.forEach((shire) => {
      shire.Compose(buf);
    });

    return buf;
  }
}
