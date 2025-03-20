const {storageModel} = require('../models')
const {uploadToPinata} = require('../utils/handleUploadIPFS')

// const createItem = async (req,res) =>{
//     const {body} = req;
//     const data = await storageModel.create(body);
//     res.json({data});
// }

const createItem = async(req, res) =>{
    try {
        // const id= req.params.id;
        const fileBuffer= req.file.buffer;
        const fileName = req.file.originalname;
        const pinataResponse = await uploadToPinata(fileBuffer, fileName);
        // console.log('PINATA RESPONSE: ', pinataResponse)

        const ipfsFile = pinataResponse.IpfsHash;
        const ipfs = `https://${process.env.PINATA_GATEWAY_URL}/ipfs/${ipfsFile}`;
        const data = await storageModel.create({fileURL:ipfs});

        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR_UPLOAD_COMPANY_IMAGE');
    }
}

module.exports = {createItem};