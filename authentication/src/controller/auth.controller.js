var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const User = require("../model/user.model")

const register = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email}).lean().exec();
        if(user)
        return res.status(400).send({ message: "Please try another email" });
        user = await User.create(req.body);

        // const token = newToken(user);
    
 return res.send({user:user});

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}     

const login = async (req,res) =>{
    try {
        const user = await User.findOne({eamil:req.body.email});
        if(!user)
        return res
        .status(400)
        .send({message:"please try another email or password"});
       
        const match = user.checkPassword(req.body.password);
        if(!match) 
        return res
        .status(400)
         .send({message:"please try another email or password"})

        //  const token = newToken(user);
        return res.send({user:user});
         
    } catch (error) {
        res.status(400).send({message: error.message})

    }
}

module.exports= {register,login}