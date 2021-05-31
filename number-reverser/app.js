import express, { json } from 'express';
const app = express();
app.use(json());
import { reverseNumber } from './number-reverser.js';
import Response from "./response/response.js";

app.get('/', (request, response) => {
    response.send('Welcome to Number Reverser');
});

app.post('/api/number-reverser/:number', (request, response) => {
    //response.send(new Response(true, 200, reverseNumber(request.query.number)));
    response.send(new Response(true, 200, reverseNumber(request.params.number)));
});

/*app.use((request, response, next) => {
    response.send(new Response(false, 404, 'Problem with the requested url. Please check again!!'));
});
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});