const express = require('express');
const app = express();
app.use(express.json());
const {bubbleSort} = require('./bubble-sort.js');

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