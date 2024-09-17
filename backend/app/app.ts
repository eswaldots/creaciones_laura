import express, { Application, Response, Request } from "express";
import { ProductsRouter } from './routes/productsRouter'
import { OrdersRouter } from "./routes/ordersRouter";
import { statusChecker } from "./middlewares/statusChecker";
import cors from "cors"
import dotenv from "dotenv"

export const app : Application = express();

const defaultPort = process.env.PORT ?? 1234

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS

dotenv.config();

const corsOptions = {
	origin: ALLOWED_ORIGINS,
	optionSuccessStatus: 200
}

app.use(cors())
app.use(express.json());
app.use(statusChecker);
app.disable('x-powered-by')

// Serve static files of products

app.use('/images', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/src/public' + req.path);
})

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.use('/orders', OrdersRouter)
app.use('/products', ProductsRouter)

app.use((req: Request, res: Response) => {
	res.status(404).send('Not Found')	
})

app.listen(defaultPort, () => {
	console.log('Server listening on port http://localhost:'+ defaultPort)
})
