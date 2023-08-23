import { Utils } from 'core/infrastructure'
import { ExpressServer } from 'core/infrastructure/instances/server'

export class APIRest {
  server?: ExpressServer

  async start(): Promise<void> {
    const port = process.env.SERVER_PORT as string

    this.server = new ExpressServer(port)

    try {
      await this.server.listen().then(function () {
        Utils.AppResponseLog.success('API REST Services are up and running\n\n')
      })
    } catch (error) {
      await this.server.stop()

      Utils.AppResponseLog.exception(
        `An unhandled error has occured when starting ExpressServer. Details: ${error}`
      )
    }
  }

  async stop(): Promise<void> {
    await this.server?.stop()
  }
}
