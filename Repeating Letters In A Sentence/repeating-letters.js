let repeatingLetters = sentence => {

    sentence = sentence.toLowerCase().replace(/\s/g, '');

    var letter = sentence.charAt(0);
    let map = new Map();
    for(let i=0; i<sentence.length; i++){
        
        if(i == sentence.length-1){

            //Check whether the last element has counted before or not. 
            let flag = 0;
            for(let j=0; j<i; j++){
                if(letter == sentence.charAt(j)){
                    flag++;
                    break;
                }
            }

            //Show the count as 1 cuz it's the last element
            if(flag == 0){
                map.set(`${letter}`, 1);
                break;
            }
            //If it already counted just break the loop. 
            else{
                break;
            }
        }

        //Checking if the letter is previously counted or not
        let flag = 0;
        for(let j=0; j<i; j++){
            if(letter == sentence.charAt(j)){
                flag++;
                break;
            }
        }

        //If it is not counted before performing the count
        if(flag == 0){

            let count = 1;
            for(let k=i; k<((sentence.length)-1); k++){
                if(letter == sentence.charAt(k+1)){
                    count++;
                }
            }

            map.set(`${letter}`, count);
            letter = sentence.charAt(i+1);

        }
        //If it already counted, just jump to the next letter
        else{

            letter = sentence.charAt(i+1);
            
        }
    }
    console.log(map);
    return map;
}

exports.repeatingLetters = repeatingLetters;

