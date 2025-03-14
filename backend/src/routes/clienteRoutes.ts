import express from 'express';
import {
  crearClienteHandler,
  getClientesHandler,
  getClienteByIdHandler,
  actualizarClienteHandler,
  eliminarClienteHandler,
} from '../controllers/clienteController';

const router = express.Router();

router.post('/clientes', crearClienteHandler);
router.get('/clientes', getClientesHandler);
router.get('/clientes/:id', getClienteByIdHandler);
router.put('/clientes/:id', actualizarClienteHandler);
router.delete('/clientes/:id', eliminarClienteHandler);

export default router;