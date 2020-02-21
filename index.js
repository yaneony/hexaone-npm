const axios = require('axios');

class hexaone {
  constructor(key) {
    this.key = key;
  }

  /* API ENDPOINTS */
  async getCurrencies(currency_code) {
    return await this.doRequest(`market/currencies/${currency_code}`);
  }

  async getItems(app_id) {
    return await this.doRequest(`market/items/${app_id}`);
  }

  async getListings(app_id) {
    return await this.doRequest(`market/listings/${app_id}`);
  }

  async getPrices(app_id) {
    return await this.doRequest(`market/prices/${app_id}`);
  }

  async getProfile(steam_id) {
    return await this.doRequest(`user/profile/${steam_id}`);
  }

  async getInventory(steam_id, app_id, context_id) {
    return await this.doRequest(`user/inventory/${steam_id}/${app_id}/${context_id}`);
  }

  /* DEFAULT REQUEST HELPER */
  async doRequest(endpoint) {
    const res = await axios({
      url: `https://api.hexa.one/${endpoint}?key=${this.key}`,
      method: 'GET',
      headers: {
        'User-Agent': 'HEXA.ONE NodeJS Package'
      }
    });
    return res.data;
  }
}

module.exports = hexaone;
