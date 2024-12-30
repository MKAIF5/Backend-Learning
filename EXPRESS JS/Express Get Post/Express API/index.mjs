import express from 'express'
import cors from "cors"
import { products } from './productsData.mjs'

const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})