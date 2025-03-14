import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const crearCliente = async (nombre: string, email: string, telefono?: string) => {
  return await prisma.cliente.create({ data: { nombre, email, telefono } });
};

export const obtenerClientes = async () => {
  return await prisma.cliente.findMany();
};

export const obtenerClientePorId = async (id: number) => {
  return await prisma.cliente.findUnique({ where: { id } });
};

export const actualizarCliente = async (id: number, nombre: string, email: string, telefono?: string) => {
  return await prisma.cliente.update({ where: { id }, data: { nombre, email, telefono } });
};

export const eliminarCliente = async (id: number) => {
  return await prisma.cliente.delete({ where: { id } });
};