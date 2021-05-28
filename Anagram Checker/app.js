const express = require('express');
const app = express();
app.use(express.json());
const {anagramChecker} =require('./anagram-checker.js')

app.get('/', (request, response) => {
    response.send('Welcome to Anagram Checker');
});

app.post('/api/anagram', (request, response) => {
    response.send(anagramChecker(request.body.word1, request.body.word2));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});