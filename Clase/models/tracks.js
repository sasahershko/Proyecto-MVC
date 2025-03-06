const mongoose = require("mongoose")
const mongooseDelete = require('mongoose-delete');

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true; //TODO crear patrón
                },
                message: "ERROR_URL",
            }
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            },
            age:{
                type: Number
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId // Estructura (string) especial de mongo
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

TracksScheme.plugin(mongooseDelete, {overrideMethods: 'all'}); //override, para que coja el de delete no el esquema 
module.exports = mongoose.model("tracks", TracksScheme) // Nombre de la colección (o de la tabla en SQL)