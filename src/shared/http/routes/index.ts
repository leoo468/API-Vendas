import { Router } from 'express';
import { deflate } from 'zlib';

const routes = Router();

routes.get ('/', (request, response) => {
    return response.json({ mesasge: 'Hello World!'});
});

export default routes;