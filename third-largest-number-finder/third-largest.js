export const thirdLargest = array => {
    
    for(let i=0; i<3; i++){

        let largest = array[i];
        let largestIndex = 0;

        for(let j=i; j<array.length-1; j++){
            if( array[j+1] > largest){
                largest = array[j+1];
                largestIndex = j+1;
            }
        }

        let temp = array[i];
        array[i] = largest;
        array[largestIndex] = temp;
        
    }
    return `Third largest number : ${array[2]}`
}

// Take the first element as largest. 
//  Then go through the rest of the elements to find any largest value than this.
//  After the first iteration, largest will replaced with the first element.
//  This will continue for three times since I need third largest number.