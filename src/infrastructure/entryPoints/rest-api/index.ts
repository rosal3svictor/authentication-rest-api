import { HELPER } from '@infrastructure/helpers';
import { ExpressServer } from '@infrastructure/servers';

export class APIRestServices {
  server?: ExpressServer;

  async start(): Promise<void> {
    const port = process.env.SERVER_PORT as string;

    this.server = new ExpressServer(port);

    try {
      await this.server.listen().then(function () {
        HELPER.APP_RESPONSE_LOG.SUCCESS('API REST Services are up and running\n\n');
      });
    } catch (error) {
      await this.server.stop();

      HELPER.APP_RESPONSE_LOG.EXCEPTION(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `An unhandled error has occured when starting ExpressServer. Details: ${error}`,
      );
    }
  }

  async stop(): Promise<void> {
    await this.server?.stop();
  }
}
