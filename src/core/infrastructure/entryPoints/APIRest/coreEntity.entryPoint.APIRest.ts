import { HELPERS } from '@core/infrastructure/helpers';
import { ExpressServer } from '@core/infrastructure/servers';

export class APIRest {
  server?: ExpressServer;

  async start(): Promise<void> {
    const port = process.env.SERVER_PORT as string;

    this.server = new ExpressServer(port);

    try {
      await this.server.listen().then(function () {
        HELPERS.AppResponseLog.success('API REST Services are up and running\n\n');
      });
    } catch (error) {
      await this.server.stop();

      HELPERS.AppResponseLog.exception(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `An unhandled error has occured when starting ExpressServer. Details: ${error}`,
      );
    }
  }

  async stop(): Promise<void> {
    await this.server?.stop();
  }
}
