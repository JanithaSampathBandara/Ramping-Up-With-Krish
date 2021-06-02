import express from 'express';
import { router } from './server/routes/router.js';
//import { anagramChecker } from './anagram-checker.js';
//import Response from './response/response.js';

const app = express();
app.use(express.json());

app.use('/api', router);
/*app.use((request, response, next) => {
    response.send(new Response(false, 404, 'Problem'));
});
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});