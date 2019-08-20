const rp = require('request-promise');

class hexaone {
  constructor(key) {
    this.key = key;
  }

  /* API ENDPOINTS */
  async getCurrencies(app_id) {
    return await this.doRequest(`currencies`);
  }

  async getItems(app_id) {
    return await this.doRequest(`items/${app_id}`);
  }

  async getPrices(app_id) {
    return await this.doRequest(`prices/${app_id}`);
  }

  async getListings(app_id) {
    return await this.doRequest(`listings/${app_id}`);
  }

  async getInventory(steam_id, app_id, context_id) {
    return await this.doRequest(`inventory/${steam_id}/${app_id}/${context_id}`);
  }

  /* DEFAULT REQUEST HELPERS */
  async doRequest(endpoint) {
    const response = await rp({
      uri: `https://api.hexa.one/${endpoint}?key=${this.key}`,
      method: 'GET',
      headers: {
        'User-Agent': 'HEXA.ONE NodeJS Package'
      },
      json: true,
    });
    return response;
  }
}

module.exports = hexaone;
