import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const crearCliente = async (nombre: string, email: string, telefono?: string) => {
  try {
    return await prisma.cliente.create({ data: { nombre, email, telefono } });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    throw new Error('No se pudo crear el cliente');
  }
};

export const obtenerClientes = async () => {
  try {
    return await prisma.cliente.findMany();
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    throw new Error('No se pudo obtener la lista de clientes');
  }
};

export const obtenerClientePorId = async (id: number) => {
  try {
    return await prisma.cliente.findUnique({ where: { id } });
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error);
    throw new Error('No se pudo encontrar el cliente');
  }
};

export const actualizarCliente = async (id: number, nombre: string, email: string, telefono?: string) => {
  try {
    return await prisma.cliente.update({ where: { id }, data: { nombre, email, telefono } });
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    throw new Error('No se pudo actualizar el cliente');
  }
};

export const eliminarCliente = async (id: number) => {
  try {
    return await prisma.cliente.delete({ where: { id } });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    throw new Error('No se pudo eliminar el cliente');
  }
};