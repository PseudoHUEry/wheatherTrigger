const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const moment = require('moment-timezone')
moment.tz.setDefault('America/Sao_Paulo')



module.exports = mongoose.model('Clima', new Schema({
    temperature: Number,
    sensation: Number,
    name: String,
    state: String,
    humidity: Number,
    condition: String,
    pressure: Number,
    dataInspect: Date,
    createDate:{type: Date, default: moment()}
}))