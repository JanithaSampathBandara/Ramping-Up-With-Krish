export const repeatingLetters = (sentence) => {

    sentence = sentence.toLowerCase().replace(/\s/g, '');
    
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
