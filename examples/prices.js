const hexaone = require('../index.js'); // use require('hexa.one') in production
const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {

    var prices = await api.getPrices(730);
    console.log(prices);

  } catch (err) {
    console.log(err);
  }
})();
