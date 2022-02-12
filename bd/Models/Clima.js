const {Schema, Model} = require('mongoose')

module.exports = Model('Clima', new Schema({
    temperaturaMin: Number,
    temperaturaMax: Number,
    locale: String
}))