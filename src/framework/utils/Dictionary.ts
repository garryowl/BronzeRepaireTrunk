/**
 * 字典
 * @desc 与Set类相似，ECMAScript 6同样包含了一个Map类的实现，即我们所说的字典
 */
export default class Dictionary {
    private items = {};
    public set(key, value) {
        this.items[key] = value;
    }
    public remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        } else {
            return false;
        }
    }
    public has(key) {
        return key in this.items;
    }
    public get(key) {
        return this.has(key) ? this.items[key] : null;
    }
    public clear() {
        this.items = {};
    }
    public get size() {
        let count = 0;
        for (var prop in this.items) { //{5}
            if (this.items.hasOwnProperty(prop)) //{6}
                ++count; //{7}
        }
        return count;
    }
    public get keys(): Array<any> {
        let values = [];
        for (var k in this.items) {
            //sif (this.has(k)) {
            values.push(k);
            //}
        }
        return values;
    }
    public get values(): Array<any> {
        let values = [];
        for (var k in this.items) {
            //if (this.has(k)) {
            values.push(this.items[k]);
            //}
        }
        return values;
    }
    public get Items() {
        return this.items;
    }

    public Clone(): Dictionary {
        let clone: Dictionary = new Dictionary();
        for (var k in this.items) {
            clone.set(k, this.items[k])
        }
        return clone;
    }
}