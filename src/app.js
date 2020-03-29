import express from 'express';

import config from './config';
import routes from './routes';

const app = express();

// API Routes
app.use(config.baseAPI, routes);

export default app;
