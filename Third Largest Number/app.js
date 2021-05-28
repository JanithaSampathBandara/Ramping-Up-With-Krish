const express = require('express');
const app = express();
app.use(express.json());
const {thirdLargest} = require('./third-largest.js');

app.get('/', (request, response) => {
    response.send('Welcome to Third Largest Number Checker');
});

app.post('/api/third-largest', (request, response) => {
    response.send(thirdLargest(request.body.numberSequence));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});