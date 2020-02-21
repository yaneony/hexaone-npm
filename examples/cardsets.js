const hexaone = require('../index.js'); // use require('hexa.one') in production
const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {

    var items = await api.getItems(753);
    var sets = Object.values(items.result.items).reduce(function (obj, item) {
      if (item.type.includes('Trading Card') && !item.type.includes('Foil Trading Card') && !item.type.includes('Mystery Trading Card') && !item.type.includes('Mystery Foil Trading Card')) {
        var cat = item.type.replace('Trading Card', '').trim();
        obj[cat] = obj[cat] || [];
        obj[cat].push(item.market_hash_name);
      }
      return obj;
    }, {});

    console.log(sets);

  } catch (err) {
    console.log(err);
  }
})();
