import express from 'express';
import { linearSearch } from './linear-search.js';
const app = express();
app.use(express.json());

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