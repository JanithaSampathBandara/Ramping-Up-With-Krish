export class PetUpdateDto {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }
}
