const express = require('express');
const router = express.Router();

const {authMiddleware} = require('../middleware/session');
const {validatorRegister, validatorLogin} = require('../validators/auth');
const {register, login} = require('../controllers/auth');


router.post('/register', validatorRegister, register);
router.post('/login', validatorLogin, login);

module.exports = router;

// const express = require('express');
// const {matchedData} = require('express-validator');
// const {encrypt, compare} = require('../utils/handlePassword');
// const {usersModel} = require('../models');
// const router = express.Router()
// const {validatorRegister, validatorLogin} = require('../validators/auth');
// const {tokenSign, verifyToken} = require('../utils/handleJwt')

// router.post('/register', validatorRegister, async(req, res) =>{
//     req = matchedData(req);
//     const password = await encrypt(req.password);
//     const body = {...req, password};
//     const dataUser = await usersModel.create(body);
//     dataUser.set('password', undefined, {strict: false});

//     const data ={
//         token: tokenSign(dataUser),
//         user: dataUser
//     }
//     res.send(data);
// })

// router.post('/login', validatorLogin, async (req, res) => {
//     req = matchedData(req);
//     const dataUser = await usersModel.findOne({ email: req.email });

//     if(!compare(req.password, dataUser.password)){
//         return res.status(401).send({ error: 'The password is invalid.' });
//     }

//     const data = {
//         token: tokenSign(dataUser),
//         user: dataUser
//     };

//     res.send(data);
// });


//     module.exports = router;
