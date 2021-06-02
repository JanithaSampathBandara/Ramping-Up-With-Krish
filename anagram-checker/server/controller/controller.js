import Response from '../response/response.js';
import { anagramChecker } from '../service/anagram-checker.js';

export const findAnagramController = (request, response) => {
    const word1 = request.body.word1;
    const word2 = request.body.word2;
    if (!(word1) || !(word2)) {
        response.status(400).send(new Response(false, 400, 'Expected request body must be provided!!'));
    }
    else {
        response.status(200).send(new Response(true, 200, anagramChecker(word1, word2)));
        
    }
}