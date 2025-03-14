"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteController_1 = require("../controllers/clienteController");
const router = express_1.default.Router();
router.post('/clientes', clienteController_1.crearClienteHandler);
router.get('/clientes', clienteController_1.getClientesHandler);
router.get('/clientes/:id', clienteController_1.getClienteByIdHandler);
router.put('/clientes/:id', clienteController_1.actualizarClienteHandler);
router.delete('/clientes/:id', clienteController_1.eliminarClienteHandler);
exports.default = router;
