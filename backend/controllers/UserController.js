const User = require("../models/User")
const jwt = require("jsonwebtoken");


const signUp = async (req,res) =>{
    let check = await User.findOne({email:req.body.email});
    if(check)
        {
            return res.status(400).json({success:false,error:"existing user found with same email"})
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] =0;    
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

module.exports = {
    signUp,
    login
}