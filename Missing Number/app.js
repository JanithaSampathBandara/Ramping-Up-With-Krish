const express = require('express');
const app = express();
app.use(express.json());
const {missingNumber} = require('./missing-number.js');

app.get('/', (request, response) => {
    response.send('Welcome to Missing Number Checker');
});

app.post('/api/missing-number', (request, response) => {
    response.send(missingNumber(request.body.numberSequence));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});