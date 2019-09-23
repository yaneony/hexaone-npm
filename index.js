const axios = require('axios');

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

  async getProfile(steam_id) {
    return await this.doRequest(`profile/${steam_id}`);
  }

  async getInventory(steam_id, app_id, context_id) {
    return await this.doRequest(`inventory/${steam_id}/${app_id}/${context_id}`);
  }

  /* DEFAULT REQUEST HELPER */
  async doRequest(endpoint) {
    const response = await axios({
      url: `https://api.hexa.one/${endpoint}?key=${this.key}`,
      method: 'GET',
      headers: {
        'User-Agent': 'HEXA.ONE NodeJS Package'
      }
    });

    return response.data;
  }
}

module.exports = hexaone;
