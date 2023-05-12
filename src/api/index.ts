import express from 'express';

import athletesRouter from './athletes';
import sportsRouter from './sports';

const router = express.Router();

router.use('/athletes', athletesRouter);
router.use('/sports', sportsRouter);

export default router;
