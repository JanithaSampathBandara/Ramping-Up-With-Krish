export const selectionSort = numbers => {
    
    for(let iteration=0; iteration<numbers.length-1; iteration++){
        
        let smallest = numbers[iteration];
        let smallestIndex = iteration;

        // Getting the smallest number
        for(let position=iteration; position<numbers.length-1; position++){
            if(numbers[position+1] < smallest){
                smallest = numbers[position+1];
                smallestIndex = position+1;
            }
        }

        // Swapping numbers into ascending order
        [numbers[iteration], numbers[smallestIndex]] = [numbers[smallestIndex], numbers[iteration]]
        
    }
    return numbers;
}
