const express = require('express');
const app = express();
app.use(express.json());
const {repeatingLetters} = require('./repeating-letters.js');

app.get('/', (request, response) => {
    response.send('Welcome to Repeating Letter Counter');
});

app.post('/api/repeating-letters', (request, response) => {
    response.send(repeatingLetters(request.body.sentence));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});