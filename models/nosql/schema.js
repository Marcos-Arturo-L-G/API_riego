const mongoose = require ("mongoose")

const Schema = new mongoose.Schema(
    {
        humedad:{
            type:Number
        },
        temperatura:{
            type:Number
        },
        aspersor1:{
            type:Boolean
        },
        aspersor2:{
            type:Boolean
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("schema", Schema)