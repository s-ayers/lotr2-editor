import { Armory } from './Armory.model';
import { Shire } from './Shire.model';
import { Army } from './Army.model';
import { Inventory } from './Inventory.model';
import { Header } from './Header.model';
import { Map } from './map/map.model';

export namespace Game {
  export function Parse(buf: Buffer): any {
    const myGame = {};

    myGame['header'] = new Header(buf);
    myGame['map'] = new Map(buf);

    myGame['inventory'] = new Inventory(buf, 84864);
    myGame['armory'] = new Armory(buf);

    myGame['shires'] = [];

    myGame['players'] = [];
    let mynameOffset = 84016;
    //                264660
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
