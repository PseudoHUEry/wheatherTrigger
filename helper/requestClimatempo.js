const axios = require("axios");
const Clima = require('../bd/Models/Clima')
const moment = require('moment-timezone')

moment.tz.setDefault('America/Sao_Paulo')

module.exports = async () => {
  let {data} = await axios({
    url: `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=${process.env.HASH}`,
  });
   const entity = {
    temperature: data.data.temperature,
    sensation: data.data.sensation,
    name: data.name,
    state: data.state,
    humidity: data.data.humidity,
    condition:data.data.condition,
    pressure:data.data.pressure,
    dataInspect:moment(data.data.date),
   }
   await Clima.create(entity)
   setTimeout(() => require('./requestClimatempo.js')(), moment().diff(moment().add(process.env.TIMEREQUEST||300,'seconds'),'milliseconds')*-1)
   console.log(`Clima: ${entity.condition}, humidade: ${entity.humidity}, temperatura: ${entity.temperature}, sensação: ${entity.sensation}.`)
};
