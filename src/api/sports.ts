import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Obteniendo el recurso de deportes' });
});
router.post('/', (_req, res) => {
  res.json({ message: 'Creando un nuevo recurso de deportes' });
});
router.put('/', (_req, res) => {
  res.json({ message: 'Modificar un nuevo recurso de deportes' });
});
router.delete('/', (_req, res) => {
  res.json({ message: 'Eliminar un nuevo recurso de deportes' });
});

export default router;
