const express = require('express');
const multer = require('multer');
const productsModel = require('./models/product.model');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({storage: multer.memoryStorage() })

app.post('/', (req, res)=>{
    console.log("test server");
    
})
module.exports = app;