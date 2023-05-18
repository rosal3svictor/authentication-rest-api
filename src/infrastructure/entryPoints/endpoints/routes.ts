import { Router } from 'express';
import { USERS } from '@application/users';

const router = Router();

router.use('/users', USERS.INFRASTRUCTURE.ENDPOINTS.CRUD_ROUTER);
router.use('/auth', USERS.INFRASTRUCTURE.ENDPOINTS.AUTH_ROUTER);

export default router;
