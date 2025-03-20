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
    check('artist_name').exists().notEmpty(),
    check('artist_nickname').exists().notEmpty(),
    check('artist_age').exists().notEmpty().isInt(),
    check('artist_nationality').exists().notEmpty(),
    check('duration_start').exists().isInt(),
    check('duration_end').exists().isInt(),
    check('mediaId').exists().notEmpty(),
    validateResults
]

module.exports = {validatorCreateItem, validatorGetItem}