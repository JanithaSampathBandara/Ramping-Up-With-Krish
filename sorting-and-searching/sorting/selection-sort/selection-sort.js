export const selectionSort = numbers => {
    
    for(let index=0; index<numbers.length-1; index++){
        
        let smallest = numbers[index];
        let smallestIndex = index;

        // Getting the smallest number
        for(let innerIndex=index; innerIndex<numbers.length-1; innerIndex++){
            if(numbers[innerIndex+1] < smallest){
                smallest = numbers[innerIndex+1];
                smallestIndex = innerIndex+1;
            }
        }

        // Swapping numbers into ascending order
        [numbers[index], numbers[smallestIndex]] = [numbers[smallestIndex], numbers[index]]
        
    }
    return numbers;
}
