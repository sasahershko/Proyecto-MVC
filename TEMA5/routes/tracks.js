const express = require('express');
const router = express.Router();

const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/tracks');
//MIDDLEWARE
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const {customHeader} = require('../middleware/customHeader')

//authmiddleware - PARA VER SI PASA TOKEN
const {authMiddleware} = require('../middleware/session');
const {checkRole} = require('../middleware/role')


//con el controlador
router.get('/', authMiddleware, checkRole(['admin']) , getItems);
router.get('/:id', validatorGetItem, getItem);
router.post('/', validatorCreateItem, createItem);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);


module.exports = router;