
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleHttpError')
const {matchedData} = require('express-validator');

const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find();
        res.send(data);
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await tracksModel.findById(id);
        if (!data) {
            return handleHttpError(res, 'ITEM_NOT_FOUND', 404);
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM');
    }
}

const createItem = async (req, res) => {
    try {
        // console.log(req.body);
        const body = matchedData(req); //Nos limpia los campos
        // console.log(body);
        const data = await tracksModel.create(body);
        res.json( data )
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }
}

const updateItem = async (req, res) => {
    const { id } = req.params;
    // const data = await tracksModel.findByIdAndUpdate(id, req.body, {new: true});
    const data = await tracksModel.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.json({ data });
}

const deleteItem = async (req, res) => {
    const { id } = req.params;
    //BORRADOR LÓGICO
    const data = await tracksModel.delete({_id:id});
    // const data = await tracksModel.findByIdAndDelete(id);
    res.json({ data });
}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}