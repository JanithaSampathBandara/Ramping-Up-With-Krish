 export const missingNumber = (array) => {

    //Sorting the existing array
    for (let index=0; index<array.length-1; index++) {
        let smallest = array[index];
        let smallestIndex= index;

        for (let indexIn=index; indexIn<array.length-1; indexIn++) {
            if (array[indexIn+1] < smallest) {
                smallest = array[indexIn+1]
                smallestIndex = indexIn+1;
            }  
        }
        // Swapping numbers into ascending order
        [array[index], array[smallestIndex]] = [array[smallestIndex], array[index]]
    }

    //Checking the missing number 
    for(let index=0; index< array.length-1; index++){
        if(array[index+1] != array[index]+1){
            return `Missing Number Is : ${array[index]+1}`;
        }
    }
}