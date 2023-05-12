import { successOutput } from './utils';
import app from './app';

// ==================  Express Server - Exposed on port  ==================== */
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `${successOutput(
      `Connected successfully on port ${process.env.SERVER_PORT ?? 3000}`,
    )}`,
  );
});
