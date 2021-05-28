const express = require('express');
const app = express();
app.use(express.json());
const {binarySearch} = require('./binary-search.js');

app.get('/', (request, response) => {
    response.send('Welcome to Binary Search Algorithm');
});

app.post('/api/binary-search', (request, response) => {
    response.send(binarySearch(request.body.numberSequence, request.body.target));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});