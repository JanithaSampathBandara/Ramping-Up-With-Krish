import express from 'express';
//import { anagramChecker } from '../../anagram-checker.js';
//import Response from '../../response/response.js';
import { findAnagramController } from '../controller/controller.js';
export const router = express.Router();

router.get('/', (request, response) => {
    response.send('Welcome to Anagram Checker');
});

router.post('/anagram', findAnagramController);
    //{
    //console.log(request.body);
    //findAnagramController(request, response);
    //response.send(new Response(true, 200, anagramChecker(request.body.word1, request.body.word2)));
//});