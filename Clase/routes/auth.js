const express = require('express');
const router = express.Router();

const {authMiddleware} = require('../middleware/session');
const {validatorRegister, validatorLogin} = require('../validators/auth');
const {register, login} = require('../controllers/auth');


/**
* @openapi
* /api/auth/register:
* post:
* tags:
* - User
* summary: "User registter"
* description: Register a new user
* requestBody:
* content:
* application/json:
* schema:
* $ref: "#/components/schemas/user"
* responses:
* '200':
* description: Returns the inserted object
* '401':
* description: Validation error
* security:
* - bearerAuth: []
*/
router.post('/register', validatorRegister, register);
/**
* @openapi
* /api/auth/login:
* post:
* tags:
* - User
* summary: Login user
* description: ''
* requestBody:
* content:
* application/json:
* schema:
* $ref: "#/components/schemas/login"
* responses:
* '200':
* description: Returns the inserted object
* '401':
* description: Validation error
*/
router.post('/login', validatorLogin, login);

module.exports = router;