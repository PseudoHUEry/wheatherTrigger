const axios = require("axios");

module.exports = async () => {
  const result = await axios({
    method: "GET",
    // url: "http://localhost:3000/health",
    url: "http://www.uol.com.br",

  });
  console.log(result)
};
