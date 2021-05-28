function anagramChecker(word1, word2) {

    console.log("Word 1 : ", word1);
    console.log("Word 2 : ", word2);
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    //Check whether both words have same no of letters
    if(word1.length === word2.length){
        var charArray1 = [];
        var charArray2 = [];

        //Create two char arrays from both words
        for(let i=0; i<word1.length; i++){
            charArray1.push(word1[i]);
            charArray2.push(word2[i]);
        }

        //Sort both char arrays into alphabetical order
        for(let j=0; j<(charArray1.length)-1; j++){
            for(let k=0; k<(charArray1.length)-1; k++){
                if(charArray1[k+1] < charArray1[k]){
                    let temp1 = charArray1[k];
                    charArray1[k] = charArray1[k+1];
                    charArray1[k+1] = temp1;
                }
                if(charArray2[k+1] < charArray2[k]){
                    let temp2 = charArray2[k];
                    charArray2[k] = charArray2[k+1];
                    charArray2[k+1] = temp2;
                }
            }   
        }
        
        //Check whether both char arrays have same letters from the begining since both are sorted into alphabetical order
        let count = 0;
        for(let l=0; l<charArray1.length; l++){
            if(charArray1[l] != charArray2[l]){
                count++;
            }
        }
        if(count > 0){
            return "These are not Anagram words";
        }
        else{
            return "These are Anagram words";
        }
    }
    else{
        return "These are not Anagram words";
    }
}

module.exports = { anagramChecker };
