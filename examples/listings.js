const hexaone = require('../index.js'); // use require('hexa.one') in production
const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {

    var listings = await api.getListings(730);
    console.log(listings);

  } catch (err) {
    console.log(err);
  }
})();
