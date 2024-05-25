var express = require('express');
const { addProduct, deleteProduct, getProducts } = require('../controllers/ProductController');
var router = express.Router();

router.get('/products',getProducts)
router.post('/addproduct',addProduct)
router.delete('/deleteproduct/:id',deleteProduct)

module.exports = router;