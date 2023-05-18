import { Router } from 'express';

import { CONTROLLER } from '../implementations/controllers';

const ROUTER = Router();

ROUTER.post('/', CONTROLLER.AUTH);

export default ROUTER;
