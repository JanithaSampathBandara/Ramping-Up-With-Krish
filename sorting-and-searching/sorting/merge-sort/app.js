import express from 'express';
import { mergeSort } from './merge-sort.js';
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Welcome to Merge Sort Algorithm');
});

app.post('/api/merge-sort', (request, response) => {
    response.send(mergeSort(request.body.numberSequence, 0, (request.body.numberSequence).length-1));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});