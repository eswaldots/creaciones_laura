import express, { Application, Response, Request } from "express";
import dotenv from "dotenv"
import { ProductsRouter } from './routes/productsRouter'

const app : Application = express();

const defaultPort = process.env.PORT ?? 1234

dotenv.config();
app.use(express.json());


app.use('/products', ProductsRouter)

app.listen(defaultPort, () => {
	console.log('Server listening on port http://localhost:'+ defaultPort)
})