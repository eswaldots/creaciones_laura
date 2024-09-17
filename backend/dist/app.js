"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouter_1 = require("./routes/productsRouter");
const ordersRouter_1 = require("./routes/ordersRouter");
const statusChecker_1 = require("./middlewares/statusChecker");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const defaultPort = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1234;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
dotenv_1.default.config();
const corsOptions = {
    origin: ALLOWED_ORIGINS,
    optionSuccessStatus: 200
};
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(statusChecker_1.statusChecker);
app.disable('x-powered-by');
// Serve static files of products
app.use('/images', (req, res) => {
    res.sendFile(__dirname + '/src/public' + req.path);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/orders', ordersRouter_1.OrdersRouter);
app.use('/products', productsRouter_1.ProductsRouter);
app.use((req, res) => {
    res.status(404).send('Not Found');
});
app.listen(defaultPort, () => {
    console.log('Server listening on port http://localhost:' + defaultPort);
});
exports.default = app;
