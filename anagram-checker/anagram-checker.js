export const anagramChecker = (word1, word2) => {

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    //Check whether both words have same no of letters
    if (word1.length === word2.length) {
        
        //Create two char arrays from both words
        let [charArray1, charArray2] = [[...word1], [...word2]];

        //Sort both char arrays into alphabetical order
        for (let index=0; index<charArray1.length-1; index++) {
            for (let elementIndex=0; elementIndex<charArray1.length-1; elementIndex++) {

                // Swapping letters of word1 into alphabetical order
                if (charArray1[elementIndex+1] < charArray1[elementIndex]) {
                    [charArray1[elementIndex], charArray1[elementIndex+1]] = [charArray1[elementIndex+1], charArray1[elementIndex]];
                }
                
                // Swapping letters of word2 into alphabetical order
                if (charArray2[elementIndex+1] < charArray2[elementIndex]) {
                    [charArray2[elementIndex], charArray2[elementIndex+1]] = [charArray2[elementIndex+1], charArray2[elementIndex]];
                }
            }   
        }
        
        //Check whether both char arrays have same letters from the begining since both are sorted into alphabetical order
        let count = 0;
        for (let index=0; index<charArray1.length; index++) {
            if (charArray1[index] != charArray2[index]) {
                count++;
            }
        }
        if (count > 0) {
            return "These are not Anagram words";
        }
        else {
            return "These are Anagram words";
        }
    }
    else {
        return "These are not Anagram words";
    }
}

let word1 = 'janz';
let word2 = 'janz';
word1 = word1.toLowerCase();
word2 = word2.toLowerCase();
console.log(anagramChecker(word1, word2));