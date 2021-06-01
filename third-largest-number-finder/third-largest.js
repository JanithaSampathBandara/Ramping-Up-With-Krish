export const thirdLargest = numberArray => {
    
    // Sorting the number sequence array for three times only since we need the 3rd largest number.
    for(let outer=0; outer<3; outer++){

        let largest = numberArray[outer];
        let largestIndex = 0;

        for(let inner=outer; inner<numberArray.length-1; inner++){
            if( numberArray[inner+1] > largest){

                largest = numberArray[inner+1];
                largestIndex = inner+1;
            }
        }
        // Swapping numbers into descending order
        [numberArray[outer], numberArray[largestIndex]] = [numberArray[largestIndex], numberArray[outer]]
        
    }

    return `Third largest number : ${numberArray[2]}`
}