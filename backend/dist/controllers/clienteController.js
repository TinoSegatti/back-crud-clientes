"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarClienteHandler = exports.actualizarClienteHandler = exports.getClienteByIdHandler = exports.getClientesHandler = exports.crearClienteHandler = void 0;
const clienteService_1 = require("../services/clienteService");
// Crear un nuevo cliente
const crearClienteHandler = async (req, res) => {
    const { nombre, email, telefono } = req.body;
    // Validación básica
    if (!nombre || !email) {
        res.status(400).json({ error: 'Nombre y email son campos obligatorios' });
        return;
    }
    try {
        const nuevoCliente = await (0, clienteService_1.crearCliente)(nombre, email, telefono);
        res.status(201).json(nuevoCliente);
    }
    catch (error) {
        console.error('Error al crear el cliente:', error);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};
exports.crearClienteHandler = crearClienteHandler;
// Obtener todos los clientes
const getClientesHandler = async (req, res) => {
    try {
        const clientes = await (0, clienteService_1.obtenerClientes)();
        res.status(200).json(clientes);
    }
    catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};
exports.getClientesHandler = getClientesHandler;
// Obtener un cliente por ID
const getClienteByIdHandler = async (req, res) => {
    const { id } = req.params;
    // Validación básica
    if (isNaN(Number(id))) {
        res.status(400).json({ error: 'ID debe ser un número válido' });
        return;
    }
    try {
        const cliente = await (0, clienteService_1.obtenerClientePorId)(Number(id));
        if (cliente) {
            res.status(200).json(cliente);
        }
        else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    }
    catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};
exports.getClienteByIdHandler = getClienteByIdHandler;
// Actualizar un cliente
const actualizarClienteHandler = async (req, res) => {
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
        const clienteActualizado = await (0, clienteService_1.actualizarCliente)(Number(id), nombre, email, telefono);
        res.status(200).json(clienteActualizado);
    }
    catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};
exports.actualizarClienteHandler = actualizarClienteHandler;
// Eliminar un cliente
const eliminarClienteHandler = async (req, res) => {
    const { id } = req.params;
    // Validación básica
    if (isNaN(Number(id))) {
        res.status(400).json({ error: 'ID debe ser un número válido' });
        return;
    }
    try {
        await (0, clienteService_1.eliminarCliente)(Number(id));
        res.status(204).send(); // 204: No Content
    }
    catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
exports.eliminarClienteHandler = eliminarClienteHandler;
