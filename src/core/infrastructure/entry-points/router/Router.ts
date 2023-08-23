import { Router } from 'express'
import { UserEntity } from 'entities/users'

const ROUTER = Router()

ROUTER.use('/users', UserEntity.router)

export default ROUTER
