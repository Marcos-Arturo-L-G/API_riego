const {schema} = require('../models')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await schema.find({});

    res.send({data})
}

/**
 * insertar un regirstro
 * @param {*} req 
 * @param {*} res 
 */
 const createItem = async (req, res) => {

    const {body} = req 
    console.log(body)
    const data = await schema.create(body)
    res.send({data})

}

module.exports = {getItems, createItem}