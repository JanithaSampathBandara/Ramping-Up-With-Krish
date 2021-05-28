const express = require('express');
const app = express();
app.use(express.json());
const {palindromeChecker} = require('./palindrome-checker.js');

app.get('/', (request, response) => {
    response.send('Welcome to Palindrome Checker');
});

app.post('/api/palindrome-checker', (request, response) => {
    response.send(palindromeChecker(request.body.word));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});