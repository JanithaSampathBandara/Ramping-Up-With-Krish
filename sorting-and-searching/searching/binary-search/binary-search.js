export const binarySearch = (array, target) => {

    let minIndex = 0;
    let maxIndex = array.length-1;
    let midIndex;
    var result = "";
    while(maxIndex >= minIndex){

        midIndex = Math.round((minIndex + maxIndex) /2);

        if(target === array[midIndex]){
            result = `Element is located at index : ${midIndex}`;
            break;
        }

        else if(target < array[midIndex]){
            maxIndex = midIndex-1;
        }
        
        else{
            minIndex = midIndex+1;
        }
    }
    return result;
}