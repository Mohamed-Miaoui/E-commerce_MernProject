const Product = require('../models/Product')



const getProducts = async (req,res) => {
    const products = await Product.find()
    res.json(products)
}

const addProduct = async (req,res) =>{
const product = new Product();
product.id = req.body.id
product.name = req.body.name
product.image = req.body.image
product.category = req.body.category
product.new_price = req.body.new_price
product.old_price = req.body.old_price

console.log(product)
await product.save();
console.log("saved")
res.json({
    success:true,
    name:product.name
})
}

const deleteProduct = async (req,res) => {
    const productId = req.params.id;
    const pro = await Product.findById(productId)
    if (!pro) {
        return res.status(404).json({ message: "product not found" });
    }
    await Product.deleteOne(pro);
    res.json({
        success:true, 
        id: req.params.id
    })
}



module.exports = {
    addProduct,
    deleteProduct,
    getProducts
}