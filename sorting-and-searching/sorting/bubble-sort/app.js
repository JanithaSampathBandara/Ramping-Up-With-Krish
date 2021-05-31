//Refactor with ES6 features
import express from 'express';
import { bubbleSort } from './bubble-sort.js';
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Welcome to Bubble Sort Algorithm');
});

app.post('/api/bubble-sort', (request, response) => {
    response.send(bubbleSort(request.body.numberSequence));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});