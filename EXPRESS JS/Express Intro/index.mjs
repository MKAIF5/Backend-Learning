import express from 'express'

const app = express();

const port = 5173

app.get('/', (req, response) => {
    response.send("hello world")
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
