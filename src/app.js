import express from 'express';
import cors from 'cors';
import resendRoutes from './routes/resend.routes.js'

const app = express();

app.use(cors({
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json())

app.use("/resend", resendRoutes)

export default app