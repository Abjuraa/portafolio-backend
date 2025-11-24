import express from 'express';
import cors from 'cors';
import resendRoutes from './routes/resend.routes.js'

const app = express();

app.use(cors({
    origin: ["https://repositorio-delta-livid.vercel.app", "http://localhost:3000"],
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json())

app.use("/api", resendRoutes)

export default app