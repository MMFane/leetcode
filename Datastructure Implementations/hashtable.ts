import { sha256 } from "js-sha256";

type RecordKey = string;

class Hashtable<K extends RecordKey, V> {
    records: Record<K, V>;

    constructor() {
        this.records = {} as Record<K, V>;
    }

    computeHashCode(key: K) {
        return sha256(key);
    }

    insert(key: K, value: V): void {
        const hashCode = this.computeHashCode(key);
        let record = this.records[hashCode];
        this.get(key);
        // otherwise deal with a single {K, V}

        if (existingRecord && existingRecord.value !== "DELETED") {
            console.log(
                `Found identical key ${existingRecord.key} with value ${existingRecord.value}`
                // todo: handle collision
            );
        } else {
            if (existingRecord) {
                existingRecord.value = value;
            } else {
                record.push({ key, value });
            }
        }
    }

    get(key: K): V | -1 {
        const hashCode = this.computeHashCode(key);
        const existingRecord = this.records[hashCode];
        // if existingRecord is an array, travserse it and find the key
        return this.records[hashCode] || -1;
    }

    delete(key: K): void {
        const hashCode = this.computeHashCode(key);
        // if existingRecord is an array, travserse it and find the key
        this.records[hashCode] = "DELETED";
    }
}

const myHashTable = new Hashtable();
myHashTable.insert("Sam", "Daisy");
myHashTable.insert("Sarah", "Mahalia");
myHashTable.insert("Wes", "Mahalia");
myHashTable.insert("Michael", "Hope");
myHashTable.insert("Alyssa", "Mochi");
myHashTable.insert("Sam", "Tonks");
console.log(myHashTable.get("Sam"));
console.log(myHashTable.get("Alyssa"));
myHashTable.delete("Sam");
