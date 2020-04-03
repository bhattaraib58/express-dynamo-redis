import './redisClient';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import responseTime from 'response-time';

import config from './config';
import routes from './routes';

import * as errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(responseTime());
app.use(bodyParser.json());
app.use(errorHandler.bodyParser);

// API Routes
app.use(config.baseAPI, routes);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

export default app;
