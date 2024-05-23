import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) =>{
    try{
        const {fullName, userName, password, confirmPassword, gender}= req.body;
        
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }
        if(!validatePassword(password)){
            return res.status(400).json({error:"Password wasn't in the required format - at least 1 Upper, 1 special, 1 digit, total lenght > 8"});
        }
        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({error:"userName already exists"});
        }

        //Hash password here

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //avatar-placeholder
        const boyProfilePic = `https://api.dicebear.com/8.x/pixel-art/svg?seed=Jane`;
        const girlProfilePic = `https://api.dicebear.com/8.x/pixel-art/svg?seed=John`;
        
        const newUser = new User({
            fullName,
            userName,
            password : hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })
        
        if(newUser){
            //generate JWT token here
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilepic: newUser.profilePic
            });
         } else{
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller -" + error.message);
        res.status(500).json({ error:"Internal Server Error"});
    }
}

function validatePassword(password){
    if (password.length < 8) {
        return false; // Password is too short
      }
    
      let hasUpperCase = false;
      let hasSpecialChar = false;
      let hasNumber = false;
    
      for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
          hasUpperCase = true;
        } else if ('!@#$%^&*()_-+=<>?/.[]{}|'.includes(char)) {
          hasSpecialChar = true;
        } else if (char >= '0' && char <= '9') {
          hasNumber = true;
        }
      }
    
      return hasUpperCase && hasSpecialChar && hasNumber;
}
export const login= (req, res) =>{
    console.log("loginUser");
}

export const logout= (req, res) =>{
    console.log("logoutUser");
}
