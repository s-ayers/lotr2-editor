

export class Property {
    public value;

    constructor(buf: Buffer, public offset: number, public size: number = 1, public signed: boolean = false, public type: string = 'number') {

        if (type === 'number') {
            switch(size) {
                case 4: {
                    if (signed) {
                        this.value = buf.readInt32LE(offset);
                    } else {
                        this.value = buf.readUInt32LE(offset);
                    }
                    break;
                }

                case 2: {
                    if (signed) {
                        this.value = buf.readInt16LE(offset);
                    } else {
                        this.value = buf.readUInt16LE(offset);
                    }
                    break;
                }

                case 1: {
                    if (signed) {
                        this.value = buf.readInt8(offset);
                    } else {
                        this.value = buf.readUInt8(offset);
                    }
                    break;
                }

            }
        }

        if (type === 'string') {
            let i = 0;
            let c = '';
            this.value = '';
            do {
                c = buf.toString('ascii', offset + i, offset + i + 1);
                if (c !== '\u0000') {
                  this.value += c;
                }

                i += 1;
              } while (c !== '\u0000' && i < size);
        }

    }

    knownBytes(): number {
        return this.size;
    }
}