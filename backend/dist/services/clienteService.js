"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCliente = exports.actualizarCliente = exports.obtenerClientePorId = exports.obtenerClientes = exports.crearCliente = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const crearCliente = async (nombre, email, telefono) => {
    return await prisma.cliente.create({ data: { nombre, email, telefono } });
};
exports.crearCliente = crearCliente;
const obtenerClientes = async () => {
    return await prisma.cliente.findMany();
};
exports.obtenerClientes = obtenerClientes;
const obtenerClientePorId = async (id) => {
    return await prisma.cliente.findUnique({ where: { id } });
};
exports.obtenerClientePorId = obtenerClientePorId;
const actualizarCliente = async (id, nombre, email, telefono) => {
    return await prisma.cliente.update({ where: { id }, data: { nombre, email, telefono } });
};
exports.actualizarCliente = actualizarCliente;
const eliminarCliente = async (id) => {
    return await prisma.cliente.delete({ where: { id } });
};
exports.eliminarCliente = eliminarCliente;
