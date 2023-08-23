import { Controllers } from 'entities/users/infrastructure/entry-points/controllers'
import { Router } from 'express'

import { Middlewares } from '../middlewares'

export const router = Router()

router.post('/auth', Controllers.authenticate)
router.get('/refresh', Controllers.refreshToken)
router.get('/logout', Controllers.logOut)
router.post('/', Controllers.create)

router.use(Middlewares.verifyToken)

router.get('/', (_req, res) => {
  res.json({ message: 'Obteniendo el recurso de usuarios' })
})
router.put('/', (_req, res) => {
  res.json({ message: 'Modificando el recurso de usuarios' })
})
router.delete('/', (_req, res) => {
  res.json({ messaje: 'Eliminando un nuevo recurso de usuarios' })
})
