const Product = require("../models/Product");
const User = require("../models/User")
const jwt = require("jsonwebtoken");


const signUp = async (req,res) =>{
    let check = await User.findOne({email:req.body.email});
    if(check)
        {
            return res.status(400).json({success:false,error:"existing user found with same email"})
        }
        const products = await Product.find()
        let cart = {};
        for (let i = 0; i < products.length; i++) {
            cart[products[i]._id] =0;    
        }
        const user = new User();
        user.name = req.body.name,
        user.email = req.body.email,
        user.password=req.body.password,
        user.cartData=cart

        await user.save();
        const data = {
            user:{
                id:user.id
            }
        }
        //we encrypt token
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token})
}

const login = async (req,res) =>{
    let user =await User.findOne({email:req.body.email});
    if(user)
        {
            const passCompare = req.body.password ===user.password;
            if(passCompare)
                {
                    const data = {
                        user:{
                            id:user.id
                        }
                    }
                    const token = jwt.sign(data,'secret_ecom')
                    res.json({success:true,token})
                }
                else{
                    res.json({success:false,error:"wrong password"})
                }
        }
        else{
            res.json({success:false,error:"wrong email"})
        }
}
 const  fetchUser = async (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authentifacte using valid token"})
    }
    else{
        try {
            //decode the token so we can find the id of user to send it in request 
            const data = jwt.verify(token,'secret_ecom')
            req.user = data.user
            next()
        } catch (error) {
            res.status(401).send({error:"Please authentifacte using valid token"})
        }
    }
}

module.exports = {
    signUp,
    login,
    fetchUser
}