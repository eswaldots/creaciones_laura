"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const productsRouter_1 = require("./routes/productsRouter");
const ordersRouter_1 = require("./routes/ordersRouter");
const statusChecker_1 = require("./middlewares/statusChecker");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
exports.app = (0, express_1.default)();
const defaultPort = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1234;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
dotenv_1.default.config();
const corsOptions = {
    origin: ALLOWED_ORIGINS,
    optionSuccessStatus: 200
};
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(statusChecker_1.statusChecker);
exports.app.disable('x-powered-by');
// Serve static files of products
exports.app.use('/images', (req, res) => {
    res.sendFile(__dirname + '/src/public' + req.path);
});
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.app.use('/orders', ordersRouter_1.OrdersRouter);
exports.app.use('/products', productsRouter_1.ProductsRouter);
exports.app.use((req, res) => {
    res.status(404).send('Not Found');
});
exports.app.listen(defaultPort, () => {
    console.log('Server listening on port http://localhost:' + defaultPort);
});
