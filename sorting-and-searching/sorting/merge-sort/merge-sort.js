export const mergeSort = (array, left, right) => {

    //Check whether elements are exist inside the array
    if(left < right){

        let middle = Math.floor((left + right) /2);
        mergeSort(array, left, middle);
        mergeSort(array, middle+1, right);
        merge(array, left, middle, right);
        return array;

    }
    else{ 
        return array; 
    }
}

//Merging sorted arrays
const merge = (array, left, middle, right) => {
    
    let i = left; //Pointer to go through left side array
    let j = middle + 1; //Pointer to go through right side array
    let k = left; //Pointer to go through temp array

    var temp = [];

    //Compare elemets of both arrays and insert into temp array in ascending order
    while(i <= middle && j <= right){
        
        if(array[i] <= array[j]){
            temp[k] = array[i];
            k++;
            i++;
        }
        else{
            temp[k] = array[j];
            k++;
            j++;
        }
    }

    //If Right array is exhausted already, then check whether left array has more values. If so, copy those vlues into temp array
    while(i<=middle){
        temp[k] = array[i];
        k++;
        i++;
    }

    //If Left array is exhausted already, then check whether right array has more values. If so, copy those vlues into temp array
    while(j <= right){
        temp[k] = array[j];
        k++;
        j++;
    }

    //Replace all the values of original array with temp array
    for(let p=left; p<=right; p++){
        array[p] = temp[p];
    }

}