
export const linearSearch = (array, target) => {
    
    for(var index=0; index< array.length; index++){
        if(target === array[index]){
            return `Element is located at index : ${index}`;
        }
    }
}
