 export const missingNumber = (array) => {

    //Sorting the existing array
    for (let round=0; round<array.length-1; round++) {
        let smallest = array[round];
        let smallestIndex= round;

        for (let elementIndex=round; elementIndex<array.length-1; elementIndex++) {
            if (array[elementIndex+1] < smallest) {
                smallest = array[elementIndex+1]
                smallestIndex = elementIndex+1;
            }  
        }
        // Swapping numbers into ascending order
        [array[round], array[smallestIndex]] = [array[smallestIndex], array[round]]
    }

    //Checking the missing number 
    for(let index=0; index< array.length-1; index++){
        if(array[index+1] != array[index]+1){
            return `Missing Number Is : ${array[index]+1}`;
        }
    }
}