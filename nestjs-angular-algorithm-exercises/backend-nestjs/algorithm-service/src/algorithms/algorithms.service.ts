import { Injectable } from '@nestjs/common';

@Injectable()
export class AlgorithmsService {

    isAnagram(word1: String, word2: String): boolean {

        word1 = word1.toLowerCase();
        word2 = word2.toLowerCase();
    
        //Check whether both words have same no of letters
        if (word1.length === word2.length) {
            
            //Create two char arrays from both words
            let [charArray1, charArray2] = [[...word1], [...word2]];
    
            //Sort both char arrays into alphabetical order
            for (let index=0; index < charArray1.length-1; index++) {
                for (let innerIndex=0; innerIndex<charArray1.length-1; innerIndex++) {
    
                    // Swapping letters of word1 into alphabetical order
                    if (charArray1[innerIndex+1] < charArray1[innerIndex]) {
                        [charArray1[innerIndex], charArray1[innerIndex+1]] = [charArray1[innerIndex+1], charArray1[innerIndex]];
                    }
    
                    // Swapping letters of word2 into alphabetical order
                    if (charArray2[innerIndex+1] < charArray2[innerIndex]) {
                        [charArray2[innerIndex], charArray2[innerIndex+1]] = [charArray2[innerIndex+1], charArray2[innerIndex]];
                    }
                }   
            }
            
            //Check whether both char arrays have same letters from the begining since both are sorted into alphabetical order
            let count = 0;
            for (let index=0; index < charArray1.length; index++) {
                if (charArray1[index] != charArray2[index]) {
                    count++;
                }
            }
            if (count > 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }

    }

    countOccurences(inputSentence: String): any {

        let sentence = inputSentence.toLowerCase().replace(/\s/g, '');
    
        let charArray = [...sentence];
        let map = new Map();
    
        for (let index=0; index<charArray.length; index++) {
            const letter = charArray[index];

            // Checking whether the letter is exist or not inside map. If not, add to the map.
            if (!map.has(letter)) { 
                map.set(letter, 1); 
    
            } else {

                // Getting the value associated with letter(key) and increment the value and set again.
                map.set(letter,  map.get(letter) + 1);
            }
        }
        
        return Object.fromEntries(map);

    }

    findNthLargestNumber(nthNumber: number, numberSequence: number[]): number {

        // Sorting the number sequence array for three times only since we need the 3rd largest number.
        for(let index=0; index < nthNumber; index++){

            let largest = numberSequence[index];
            let largestIndex = index;

            for(let indexIn=index; indexIn < numberSequence.length-1; indexIn++){
                if(numberSequence[indexIn+1] > largest){

                    largest = numberSequence[indexIn+1];
                    largestIndex = indexIn+1;
                }
            }

            // Swapping numbers into descending order
            [numberSequence[index], numberSequence[largestIndex]] = [numberSequence[largestIndex], numberSequence[index]]
        
        }

        return numberSequence[nthNumber-1];

    }

}
