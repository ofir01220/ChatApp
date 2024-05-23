import jwt from 'jsonwebtoken';


const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SERCRET,{
        expiresIn: '15d'
    });

    res.cookie("jwt", token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //Prevent XSS attacks
        sameSite:"strict", //CSRF attacks
    });
};

export default generateTokenAndSetCookie;