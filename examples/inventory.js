const hexaone = require('../index.js'); // use require('hexa.one') in production
const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {

    var inventory = await api.getInventory('765611980197285015', 730, 2);
    console.log(inventory);

  } catch (err) {
    console.log(err);
  }
})();
