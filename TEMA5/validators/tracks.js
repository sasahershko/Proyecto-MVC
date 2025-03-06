const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorGetItem = [
    check('id').exists().notEmpty().isMongoId(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty().withMessage('NOOOOOOOOOOOOOOOOOOOOOO'),
    check('cover').exists().notEmpty().withMessage('aaaaaaaaaaaaaaaaaa'),
    // check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.age').exists().notEmpty().isInt(),
    check('artist.nationality').exists().notEmpty(),
    check('duration.start').exists().notEmpty().isInt(),
    check('duration.end').exists().notEmpty().isInt(),
    // check('mediaId').exists().notEmpty().isMongoId(),
    validateResults
]

module.exports = {validatorCreateItem, validatorGetItem}