import express from 'express';
import { thirdLargest } from './third-largest.js';
const app = express();
app.use(express.json());

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