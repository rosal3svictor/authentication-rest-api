import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Obteniendo el recurso de atletas' });
});
router.post('/', (_req, res) => {
  res.json({ messaje: 'Creando un nuevo recurso de atletas' });
});
router.put('/', (_req, res) => {
  res.json({ message: 'Modificando el recurso de atletas' });
});
router.delete('/', (_req, res) => {
  res.json({ messaje: 'Eliminando un nuevo recurso de atletas' });
});

export default router;
