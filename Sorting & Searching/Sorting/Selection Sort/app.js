const express = require('express');
const app = express();
app.use(express.json());
const {selectionSort} = require('./selection-sort.js');

app.get('/', (request, response) => {
    response.send('Welcome to Selection Sort Algorithm');
});

app.post('/api/selection-sort', (request, response) => {
    response.send(selectionSort(request.body.numberSequence));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});