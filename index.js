import cors from  'cors';
import express from 'express';
import router from "./router.js";

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)
app.get('/',(reg,res) => {
    res.send('ura')
})

app.listen(port, ()=> console.log(`server start ${port}`))