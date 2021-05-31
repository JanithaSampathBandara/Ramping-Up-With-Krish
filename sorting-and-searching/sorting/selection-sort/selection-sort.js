export const selectionSort = array => {
    
    for(let i=0; i<array.length-1; i++){
        
        let smallest = array[i];
        let smallestIndex = i;

        for(let j=i; j<array.length-1; j++){
            if(array[j+1] < smallest){
                smallest = array[j+1];
                smallestIndex = j+1;
            }
        }

        let temp = array[i];
        array[i] = smallest;
        array[smallestIndex] = temp;
        
    }
    return array;
}
