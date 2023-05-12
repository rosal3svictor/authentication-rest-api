import express from 'express';
import dotenv from 'dotenv';

import MIDDLEWARES from './middlewares';
import ENDPOINTS from './api';

// Environment configuration is exposed and read
dotenv.config();

// ==================  Express Server - Instance Creation  ================== */
const app = express();

// ==================  Express Server - Middleware Setup  =================== */
app.use(MIDDLEWARES.CORS);
app.use(MIDDLEWARES.MORGAN);
app.use(MIDDLEWARES.HELMET);
/**
 * It is a built in middleware function in Express starting from v4.16.0.
 * It parses incoming JSON requests and puts the parsed data in req.body.
 *
 * @see {@link https://expressjs.com/en/api.html | express()}
 */
app.use(express.json());

// ==================  Express Server - API Endpoints   ===================== */
app.use('/api', ENDPOINTS);

app.use(MIDDLEWARES.NOT_FOUND);
/** Custom Error Handler Middleware */
app.use(MIDDLEWARES.ERROR_HANDLER);

export default app;
