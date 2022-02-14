require("dotenv/config");
const moment = require("moment-timezone");
const climaTempo = require("./helper/requestClimatempo");
const app = require("express")();
const startDatabase = require("./bd/index");
moment.tz.setDefault("America/Sao_Paulo");

app.use("/", (req, res) => {
  res.send("health");
});

app.listen(process.env.PORT || 3000, () => {
  setTimeout(() => {
    startDatabase().then((x) => {
      climaTempo();
    }, 5000);
    console.log("Banco de Dados, Conectado");
    console.log(`Servidor online! PORTA: ${process.env.PORT}`);
  });
});
