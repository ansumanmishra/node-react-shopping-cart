const path = require('path');
var fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/products', (req, res) => {
    const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8'));
    if (!req.query.name || req.query.name !== 'null') {
        const product = jsonData.products.filter( product => product.title == req.query.name);
        res.json(product);
    } else {
        res.json(jsonData.products);
    }

});

app.get('/products/:id', (req, res) => {
    const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8'));
    const product = jsonData.products.filter( product => product.id == parseInt(req.params.id, 10));
    res.json(product);
});

const port = 5000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})

