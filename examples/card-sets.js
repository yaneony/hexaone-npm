const fs = require('fs');
const hexaone = require('../index.js'); // use require('hexa.one') in production

const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

/*
  PLEASE NOTE: Running this methon can take some time because of large file for app_id 753 (~300mb).
*/

setImmediate(async () => {
  try {
    // Check if file already exist
    if (fs.existsSync("sets.json")) {
      var sets = JSON.parse(fs.readFile("sets.json", "utf8"));
      console.log(sets);
    } else {
      // Get items from API
      var items = await api.getItems(753);

      // Process data
      var sets = Object.values(items.result.items).reduce(function (obj, item) {
        if (item.type.includes('Trading Card') && !item.type.includes('Foil Trading Card') && !item.type.includes('Mystery Trading Card') && !item.type.includes('Mystery Foil Trading Card')) {
          var cat = item.type.replace('Trading Card', '').trim();
          obj[cat] = obj[cat] || [];
          obj[cat].push(item.market_hash_name);
        }
        return obj;
      }, {});

      // Write cache
      fs.writeFileSync('sets.json', JSON.stringify(sets), 'utf8');

      console.log(sets);
    }

  } catch (err) {
    console.log(err);
  }
});
