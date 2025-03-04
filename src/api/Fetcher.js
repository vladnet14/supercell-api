import SupercellAPI from './SupercellAPI.js';

/**
 * @class Fetcher
 * @description Handles HTTP requests for the Supercell API
 */
class Fetcher {
  /**
   * @constructor
   * @param {SupercellAPI} api - The SupercellAPI instance
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * @method fetchData
   * @description Fetches data from the specified endpoint
   * @param {string} endpoint - The API endpoint
   * @returns {Promise<any>} The response data
   * @throws {Error} If request fails or API returns error
   */
  async fetchData(endpoint) {
    try {
      const url = `${this.api.baseUrl}${endpoint}`;
      const fetchOptions = {
        headers: this.api.headers,
      };

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${response.status} - ${errorData.reason || response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      /** @type {Error} */
      let err;
      if (error instanceof Error) {
        err = error;
      } else {
        err = new Error('Unknown error occurred');
      }
      throw new Error(`Request to ${endpoint} failed: ${err.message}`);
    }
  }
}

export default Fetcher;
