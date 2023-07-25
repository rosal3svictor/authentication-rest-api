import { Router } from 'express';
import { USER_ENTITY } from 'entities/users';

const ROUTER = Router();

ROUTER.use('/users', USER_ENTITY.ROUTER);

export default ROUTER;
