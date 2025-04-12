
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../model/userSchema');

const signup = async (req, resp)=>{  
    try{
        const existingUser = await User.findOne({email:req.body.email});
        if(existingUser){
            return resp.status(400).json({'message':'User already exist', error: "Email is taken"});    
            }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const createdUser = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hashPassword
        });
        await createdUser.save();
        resp.status(201).json({message:"user saved",data:null});
        
        }catch(e){
            resp.status(500).json({error:e.message});
        }
    }

const login = async (req, resp)=>{
    try{
        const userExist = await User.findOne({email:req.body.email});
    if(!userExist){
        return resp.status(400).json({error:"Invalid email"});
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, userExist.password);
    if(!isPasswordValid){
        return resp.status(400).json({error:"Invalid password"});
    }

    const token = jwt.sign(
        {id:userExist._id, email:userExist.email},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    );
    resp.status(200).json({message:"Login successful", token:token});
    }catch(e){
        resp.status(500).json({error:e.message});
    }

}

const getProfile = async (req, res) => {
    try {
      const userId = req.user.id; // From token (middleware sets this)
      const user = await User.findById(userId).select('-password'); // exclude password
  
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      res.status(200).json(user); // Send user details
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };

module.exports = {signup, login, getProfile};
