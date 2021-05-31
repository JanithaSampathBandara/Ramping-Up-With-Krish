import express from 'express';
import { repeatingLetters } from './repeating-letters.js';
const app = express();
app.use(express.json());

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