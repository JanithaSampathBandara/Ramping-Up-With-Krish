
const linearSearch = (array, target) => {
    
    for(var i=0; i< array.length; i++){
        if(target === array[i]){
            return `Element is located at index : ${i}`;
        }
    }
}

exports.linearSearch = linearSearch;
