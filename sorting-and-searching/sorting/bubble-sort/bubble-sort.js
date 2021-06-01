export const bubbleSort = numbers => {

    for(let iteration=0; iteration<numbers.length-1; iteration++){

        let flag = 0;

        for(let position=0; position<numbers.length-1-iteration; position++){
            
            if(numbers[position] > numbers[position+1]){

                // Swapping numbers into ascending order
                [numbers[position], numbers[position+1]] = [numbers[position+1], numbers[position]]
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