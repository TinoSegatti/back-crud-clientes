"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes")); // Importa las rutas de clientes
const client_1 = require("@prisma/client"); // Importa Prisma para la conexión a la base de datos
const cors_1 = __importDefault(require("cors")); // Middleware para permitir solicitudes CORS
// Crear una instancia de Express
const app = (0, express_1.default)();
// Crear una instancia de Prisma
const prisma = new client_1.PrismaClient();
// Middleware para parsear el cuerpo de las solicitudes a JSON
app.use(express_1.default.json());
// Middleware para permitir solicitudes CORS
app.use((0, cors_1.default)());
// Conectar las rutas de clientes bajo el prefijo /api
app.use('/api', clienteRoutes_1.default);
// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de gestión de clientes!');
});
// Manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});
// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Puerto del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
