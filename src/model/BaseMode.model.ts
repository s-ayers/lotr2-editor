

export class BaseModel {
    public offset: number;
    public size: number;

    public children: object = {};

    knownBytes() : number {
        const children = Object.values(this.children);
        let known = 0;
        if (children.length) {
            children.forEach(child => {
                known += child.knownBytes();
            })
        }

        return known;
    }

    knownPercent() {
        return ((this.knownBytes() / this.size) * 100).toFixed(2);
    }
}