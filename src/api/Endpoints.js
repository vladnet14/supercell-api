import Fetcher from './Fetcher.js';
import SupercellAPI from './SupercellAPI.js';

/**
 * @typedef {Object} SearchClansParams
 * @property {string} [name] - Clan name to search
 * @property {number} [minMembers] - Minimum number of members
 * @property {number} [maxMembers] - Maximum number of members
 * @property {number} [minLevel] - Minimum clan level
 * @property {number} [limit] - Limit of results
 */

/**
 * Provides methods to interact with Supercell API endpoints
 */
class Endpoints {
  /**
   * @param {SupercellAPI} api - The SupercellAPI instance
   */
  constructor(api) {
    this.fetcher = new Fetcher(api);
  }

  /**
   * Gets player data
   * @param {string} playerTag - The player tag
   * @returns {Promise<any>} Player data
   */
  async getPlayer(playerTag) {
    if (!playerTag.startsWith('#')) {
      playerTag = `#${playerTag}`;
    }
    const encodedTag = encodeURIComponent(playerTag);
    return this.fetcher.fetchData(`/players/${encodedTag}`);
  }

  /**
   * Gets clan data
   * @param {string} clanTag - The clan tag
   * @returns {Promise<any>} Clan data
   */
  async getClan(clanTag) {
    if (!clanTag.startsWith('#')) {
      clanTag = `#${clanTag}`;
    }
    const encodedTag = encodeURIComponent(clanTag);
    return this.fetcher.fetchData(`/clans/${encodedTag}`);
  }

  /**
   * Searches for clans
   * @param {SearchClansParams} [params] - Search parameters
   * @returns {Promise<any>} Clan search results
   */
  async searchClans(params = {}) {
    const { name = '', minMembers = 1, maxMembers = 50, minLevel = 1, limit = 10 } = params;
    const searchParams = new URLSearchParams({
      name,
      minMembers: minMembers.toString(),
      maxMembers: maxMembers.toString(),
      minLevel: minLevel.toString(),
      limit: limit.toString(),
    }).toString();
    return this.fetcher.fetchData(`/clans?${searchParams}`);
  }

  /**
   * Gets location data
   * @param {number} [limit=10] - Number of locations to fetch
   * @returns {Promise<any>} Location data
   */
  async getLocations(limit = 10) {
    return this.fetcher.fetchData(`/locations?limit=${limit}`);
  }
}

export default Endpoints;
