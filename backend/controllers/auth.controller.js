import User from "../models/user.model.js";

export const signup = async (req, res) =>{
    try{
        const {fullName, userName, password, confirmPassword, gender}= req.body;
        
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({error:"userName already exists"});
        }

        //Hash password here

        //avatar-placeholder
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    
        
        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilepic: gender === "male" ? boyProfilePic : girlProfilePic
        })
    
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilepic: newUser.profilePic
        });
    } catch (error) {
        console.log("Error in signup controller -" + error.message);
        res.status(500).json({ error:"Internal Server Error"});
    }
}

export const login= (req, res) =>{
    console.log("loginUser");
}

export const logout= (req, res) =>{
    console.log("logoutUser");
}
