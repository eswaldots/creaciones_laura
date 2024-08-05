import express, { Application, Response, Request } from "express";
import dotenv from "dotenv"
import { ProductsRouter } from './routes/productsRouter'
import { OrdersRouter } from "./routes/ordersRouter";

const app : Application = express();

const defaultPort = process.env.PORT ?? 1234

dotenv.config();
app.use(express.json());
app.disable('x-powered-by')

// Serve static files of products

app.use('/static', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/src/public' + req.path);
})

app.use('/orders', OrdersRouter)
app.use('/products', ProductsRouter)

app.use((req: Request, res: Response) => {
res.status(404).send('Not Found')	
})

app.listen(defaultPort, () => {
	console.log('Server listening on port http://localhost:'+ defaultPort)
})