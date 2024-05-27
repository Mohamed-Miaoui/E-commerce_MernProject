var express = require('express');
const { addProduct, deleteProduct, getProducts, getNewCollections, populairInConsoleAndAccessory, getProductbyId, addToCart, relatedProducts, removeFromCart, getCart } = require('../controllers/ProductController');
const { fetchUser } = require('../controllers/UserController');
var router = express.Router();

router.get('/products',getProducts)
router.get('/productId/:id',getProductbyId)
router.get('/newcollection',getNewCollections)
router.get('/relatedproducts/:category',relatedProducts)
router.get('/populair',populairInConsoleAndAccessory)
router.post('/getcart',fetchUser,getCart)
router.post('/addproduct',addProduct)
router.post('/removefromcart',fetchUser,removeFromCart)
router.post('/addtocart',fetchUser,addToCart) // middlewere than service
router.delete('/deleteproduct/:id',deleteProduct)

module.exports = router;