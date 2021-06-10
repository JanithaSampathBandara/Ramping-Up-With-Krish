export class NthLargestDto {
    nthNumber: number;
    numberSequence: number[];

    constructor(nthNumber: number, numberSequence: number[]) {
        this.nthNumber = nthNumber;
        this.numberSequence = numberSequence;
    }
}
