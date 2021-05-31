export const reverseNumber = number => {
    let revisedNumber = 0;
    let sum = 0;
    let remainder = 0;
    let quotient = 0;

    while(!(number < 10)) {
        quotient = Math.floor(number / 10);
        remainder = number % 10;
        sum = (sum + remainder) * 10;
        number = quotient;
    }

    revisedNumber = (sum + number);
    return revisedNumber;
}


/*
let number = 1253;
console.log(`Given Number : ${number}`)
console.log(`Reversed Number : ${reverseNumber(number)}`);
*/

