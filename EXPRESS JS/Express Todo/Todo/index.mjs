import express from 'express'
import cors from "cors"
// import { products } from './productsData.mjs'
const products = [];

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send("hello world");
});

app.get('/products', (request, response) => {
    response.send(products);
});

app.get('/product/:id', (request, response) => {

    // console.log("params ki id" , request.params.id);

    const index = Number(request.params.id) - 1;

    const product = products[index];

    if (!product) {
        response.send("Product Not Found")
    }

    response.send(product);
});

app.post('/product', (request, response) => {

    console.log("Request Get", request.body);

    const product = request.body;
    products.push(product);

    response.send("Request Get Successfully");
});

app.use((request, response) => {
    response.send("No Route Found");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
