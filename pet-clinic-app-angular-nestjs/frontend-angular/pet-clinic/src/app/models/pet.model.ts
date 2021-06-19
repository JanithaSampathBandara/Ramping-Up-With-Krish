export class Pet {
    pid: string;
    name: string;
    breed: string;
    color: string;
    weight: number;
    dob: Date;
    category: string;

    constructor(name: string, breed: string, color: string, weight: number, dob: Date, category: string) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.weight = weight;
        this.dob = dob;
        this.category = category;
    }
}
