import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.port

app.get('/', (req, res) => { 
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
