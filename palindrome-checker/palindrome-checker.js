export const palindromeChecker = word => { 

    let count = 0;
    for (let index=0; index<Math.floor((word.length/2)); index++) {
    
        // Comparing letters from both sides of the array to check whether they are equal or not
        if (word[index] !== word[word.length-1-index]) {
            count++;
            break;
        }
    }

    if (count > 0) {
        return `${word} is not a Palindrome`;
    }
    else {
        return `${word} is a Palindrome`;
    }
}
