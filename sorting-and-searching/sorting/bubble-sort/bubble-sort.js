export const bubbleSort = numbers => {

    for(let index=0; index<numbers.length-1; index++){

        let flag = 0;

        for(let innerIndex=0; innerIndex<numbers.length-1-index; innerIndex++){
            
            if(numbers[innerIndex] > numbers[innerIndex+1]){

                // Swapping numbers into ascending order
                [numbers[innerIndex], numbers[innerIndex+1]] = [numbers[innerIndex+1], numbers[innerIndex]]
                flag++;
            }

        }
        // Break the loop if no swaping performed since it already sorted
        if(flag == 0){
            break;
        }
    }
    return numbers;
}