import express, { Application, Response, Request } from "express";
import { VercelRequest, VercelResponse } from '@vercel/node';
import { ProductsRouter } from './routes/productsRouter'
import { OrdersRouter } from "./routes/ordersRouter";
import { statusChecker } from "./middlewares/statusChecker";
import cors from "cors"
import dotenv from "dotenv"

const app : Application = express();

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

app.use('/api/images', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/src/public' + req.path);
})

app.get('/api/hello', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.use('/api/orders', OrdersRouter)
app.use('/api/products', ProductsRouter)

app.use((req: Request, res: Response) => {
	console.log(`Request ${req.method} ${req.url}`)
	res.status(404).send('Not Found')	
})

app.listen(defaultPort, () => {
	console.log('Server listening on port http://localhost:'+ defaultPort)
})

export default (req: VercelRequest, res: VercelResponse) => {
	app(req as any, res as any);
  };