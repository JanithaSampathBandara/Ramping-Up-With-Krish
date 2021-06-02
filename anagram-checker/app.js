import express from 'express';
import { anagramChecker } from './anagram-checker.js';
import Response from './response/response.js';
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Welcome to Anagram Checker');
});

app.post('/api/anagram', (request, response) => {
    console.log(request.body);
    response.send(new Response(true, 200, anagramChecker(request.body.word1, request.body.word2)));
});

/*app.use((request, response, next) => {
    response.send(new Response(false, 404, 'Problem'));
});
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});