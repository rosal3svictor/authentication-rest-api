import express from 'express';
import { ENDPOINTS, MIDDLEWARES } from '@core/infrastructure/entryPoints';
import { HELPERS } from '@core/infrastructure/helpers';

import type * as http from 'http';

class ExpressServer {
  private readonly _port: string;
  private readonly _app: express.Express;
  private _httpServer?: http.Server;

  constructor(port: string) {
    this._port = port;
    this._app = express();
    this._app.use(MIDDLEWARES.CORS);
    this._app.use(MIDDLEWARES.MORGAN);
    this._app.use(MIDDLEWARES.HELMET);
    /**
     * It is a built-in middleware function in the Express framework for Node.js
     *
     * This middleware function is responsible for parsing incoming request
     * bodies that are in JSON format. It parses the JSON payload of the request
     * and makes it available on the req.body object of the request handler.
     *
     * @see {@link https://expressjs.com/en/api.html#express.json}
     */
    this._app.use(express.json());
    /**
     * It is a built-in middleware function in the Express framework for Node.js
     *
     * This middleware function is responsible for parsing incoming request
     * bodies that are in URL-encoded format. It parses the key-value pairs from
     * the request body and makes them available on the req.body object of the
     * request handler.
     *
     * @see {@link https://expressjs.com/en/api.html#express.urlencoded}
     */
    this._app.use(express.urlencoded({ extended: false }));

    this._app.use('/api', ENDPOINTS);

    this._app.use(MIDDLEWARES.RESOURCE_NOT_FOUND);
    this._app.use(MIDDLEWARES.INTERNAL_SERVER_ERROR);
  }

  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      this._httpServer = this._app.listen(this._port, () => {
        HELPERS.AppResponseLog.success(`App is being served on http://localhost:${this._port}\n`);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this._httpServer != null) {
        this._httpServer?.close((error) => {
          if (error != null) {
            reject(error);
            return;
          }

          return resolve;
        });
      }
    });
  }
}

export default ExpressServer;
