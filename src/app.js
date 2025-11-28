import express from 'express';
import cors from 'cors';
import resendRoutes from './routes/resend.routes.js'
import { swaggerSpec, swaggerUi } from './swagger.js';

const app = express();

app.use(cors({
    origin: ["https://repositorio-delta-livid.vercel.app", "http://localhost:5173"],
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json())

app.use("/api", resendRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app