export const palindromeChecker = word => { 

    let count = 0;
    for(let i=0; i<Math.floor((word.length/2)); i++){
    
        if(word[i] !== word[word.length-1-i]){
            count++;
            break;
        }
    }

    if(count > 0){
        return `${word} is not a Palindrome`;
    }
    else{
        return `${word} is a Palindrome`;
    }
}