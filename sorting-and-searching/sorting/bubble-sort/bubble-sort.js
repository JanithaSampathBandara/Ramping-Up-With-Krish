export const bubbleSort = array => {

    for(let i=0; i<array.length-1; i++){

        let flag = 0;

        for(let j=0; j<array.length-1-i; j++){
            
            if(array[j] > array[j+1]){

                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag++;
            }

        }

        if(flag == 0){
            break;
        }
    }
    return array;
}