const jwt = require('jsonwebtoken');
const getProperties = require("../utils/handlePropertiesEngine")
const JWT_SECRET = process.env.JWT_SECRET;
const propertiesKey = getProperties();

const tokenSign = (user) =>{
    const sign = jwt.sign(
        {
            // _id: user._id,
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        },
    JWT_SECRET,
    {
        expiresIn:'2h'
    }
    )
    return sign;
}


const verifyToken = (tokenJwt) =>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {tokenSign, verifyToken}