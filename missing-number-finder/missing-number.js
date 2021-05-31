export default function missingNumber(array) {

    //Sorting the existing array
    for(let i=0; i<array.length-1; i++){
        let smallest = array[i];
        let smallestIndex= i;

        for(let j=i; j<array.length-1; j++){
            if(array[j+1] < smallest){
                smallest = array[j+1]
                smallestIndex = j+1;
            }  
        }
        let temp = array[i];
        array[i] = smallest;
        array[smallestIndex] = temp;
    }

    //Checking the missing number 
    for(let k=0; k< array.length-1; k++){
        if(array[k+1] != array[k]+1){
            return `Missing Number Is : ${array[k]+1}`;
        }
    }
}