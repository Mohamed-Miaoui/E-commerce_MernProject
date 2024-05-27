const { response } = require('../app')
const Product = require('../models/Product')
const User = require('../models/User')



const getProducts = async (req,res) => {
    const products = await Product.find()
    res.json(products)
}

const getProductbyId = async (req,res) => {
    const products = await Product.findById(req.params.id)
    res.send(products)
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
        id: req.params.id,
        product: pro
    })
}

const getNewCollections =async (req,res) =>{
    let products = await Product.find({})
    //recently 8 added products
    let newCollection =products.slice(1).slice(-8);
    res.send(newCollection)
}

const populairInConsoleAndAccessory = async (req,res) =>{
    let pros = await Product.find({category:"console & accessories"})
    let pop_in_console_acc = pros.slice(0,4)
    res.send(pop_in_console_acc)
}
const relatedProducts = async (req,res) =>{
    
    let pros = await Product.find({category:req.params.category})
    if(pros ==0){
        let prosAny = await Product.find()   
        res.send(prosAny) 
    }else{
        let related_products = pros.slice(0,4)
        res.send(related_products)
    }
    
    
    
}

const addToCart = async (req, res) => {
    try {
        //req.user is filled by middlewere look in route
        // console.log(req.body, req.user);
        
        let userData = await User.findById(req.user.id);
        // Increment the quantity of the specified item in the cartData
        // console.log(req.body.item)
        userData.cartData[req.body.item] += 1;
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})

        res.send("added");
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
const removeFromCart = async (req, res) => {
    try {
        let userData = await User.findById(req.user.id);
        if(userData.cartData[req.body.item]>0)
        // decrease the quantity of the specified item in the cartData
        // console.log(req.body.item)
        userData.cartData[req.body.item] -= 1;
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})

        res.send("removed");
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const getCart = async (req,res) =>{
    let userData = await User.findById(req.user.id);
    console.log(userData.cartData)
    res.json(userData.cartData);
}



module.exports = {
    addProduct,
    deleteProduct,
    getProducts,
    getNewCollections,
    populairInConsoleAndAccessory,
    getProductbyId,
    addToCart,
    relatedProducts,
    removeFromCart,
    getCart
}