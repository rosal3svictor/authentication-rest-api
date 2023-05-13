import { Router } from 'express';
import { USERS } from '@application/users';

const router = Router();

router.use('/users', USERS.INFRASTRUCTURE.ENDPOINTS.ROUTER);

export default router;
