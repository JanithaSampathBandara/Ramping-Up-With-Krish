const express = require('express');
const app = express();
app.use(express.json());
const {linearSearch} = require('./linear-search.js');

app.get('/', (request, response) => {
    response.send('Welcome to Linear Search Algorithm');
});

app.post('/api/linear-search', (request, response) => {
    response.send(linearSearch(request.body.numbers, request.body.target));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});