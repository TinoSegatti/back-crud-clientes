import { Request, Response } from 'express';
import {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
} from '../services/clienteService';

// Crear un nuevo cliente
export const crearClienteHandler = async (req: Request, res: Response): Promise<void> => {
  const { nombre, email, telefono } = req.body;

  // Validación básica
  if (!nombre || !email) {
    res.status(400).json({ error: 'Nombre y email son campos obligatorios' });
    return;
  }

  try {
    const nuevoCliente = await crearCliente(nombre, email, telefono);
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

// Obtener todos los clientes
export const getClientesHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const clientes = await obtenerClientes();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

// Obtener un cliente por ID
export const getClienteByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Validación básica
  if (isNaN(Number(id))) {
    res.status(400).json({ error: 'ID debe ser un número válido' });
    return;
  }

  try {
    const cliente = await obtenerClientePorId(Number(id));

    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el cliente:', error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

// Actualizar un cliente
export const actualizarClienteHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { nombre, email, telefono } = req.body;

  // Validación básica
  if (isNaN(Number(id))) {
    res.status(400).json({ error: 'ID debe ser un número válido' });
    return;
  }

  if (!nombre || !email) {
    res.status(400).json({ error: 'Nombre y email son campos obligatorios' });
    return;
  }

  try {
    const clienteActualizado = await actualizarCliente(Number(id), nombre, email, telefono);
    res.status(200).json(clienteActualizado);
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};

// Eliminar un cliente
export const eliminarClienteHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Validación básica
  if (isNaN(Number(id))) {
    res.status(400).json({ error: 'ID debe ser un número válido' });
    return;
  }

  try {
    await eliminarCliente(Number(id));
    res.status(204).send(); // 204: No Content
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};