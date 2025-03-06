const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorGetItem = [
    check('id').exists().notEmpty().isMongoId(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]


const validatorCreateItem = [
    check('name').exists().notEmpty().withMessage('NOOOOOOOOOOOOOOOOOOOOOO'),
    check('age').exists().notEmpty().withMessage('aaaaaaaaaaaaaaaaaa'),
    check('email').exists().notEmpty(),
    check('password').exists().notEmpty(),
    check('role').exists().notEmpty(),
    validateResults
]

module.exports = {validatorCreateItem, validatorGetItem}