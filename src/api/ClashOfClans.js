import Fetcher from './Fetcher.js';

/**
 * @typedef {Object} PlayerData
 * @property {string} tag - Player tag
 * @property {string} name - Player name
 * @property {number} townHallLevel - Town Hall level
 * @property {number} expLevel - Experience level
 * @property {number} trophies - Current trophies
 */

/**
 * @typedef {Object} ClanData
 * @property {string} tag - Clan tag
 * @property {string} name - Clan name
 * @property {string} type - Clan type
 * @property {string} description - Clan description
 * @property {number} clanLevel - Clan level
 */

/**
 * @typedef {Object} LocationData
 * @property {number} id - Location ID
 * @property {string} name - Location name
 * @property {boolean} isCountry - Whether the location is a country
 */

/**
 * @typedef {Object} ClanSearchParams
 * @property {string} [name] - Clan name to search
 * @property {number} [limit] - Maximum results to return
 * @property {string} [warFrequency] - War frequency
 * @property {number} [minMembers] - Minimum member count
 * @property {number} [maxMembers] - Maximum member count
 * @property {number} [minClanPoints] - Minimum clan points
 */

/**
 * @class ClashOfClans
 * @description Handles Clash of Clans API endpoints
 */
class ClashOfClans {
  #fetcher;

  /**
   * @constructor
   * @param {import('./SupercellAPI.js').default} api - SupercellAPI instance
   */
  constructor(api) {
    this.#fetcher = new Fetcher(api);
  }

  /**
   * @method getPlayer
   * @description Fetch player information by tag
   * @param {string} playerTag - Player tag with or without '#'
   * @returns {Promise<PlayerData>} Player data
   * @throws {Error} If the player tag is invalid or player not found
   */
  async getPlayer(playerTag) {
    if (!playerTag.startsWith('#')) {
      playerTag = `#${playerTag}`;
    }
    const encodedTag = encodeURIComponent(playerTag);
    return this.#fetcher.fetchData(`/players/${encodedTag}`);
  }

  /**
   * @method getClan
   * @description Fetch clan information by tag
   * @param {string} clanTag - Clan tag with or without '#'
   * @returns {Promise<ClanData>} Clan data
   * @throws {Error} If the clan tag is invalid or clan not found
   */
  async getClan(clanTag) {
    if (!clanTag.startsWith('#')) {
      clanTag = `#${clanTag}`;
    }
    const encodedTag = encodeURIComponent(clanTag);
    return this.#fetcher.fetchData(`/clans/${encodedTag}`);
  }

  /**
   * @method searchClans
   * @description Search for clans using filters
   * @param {ClanSearchParams} params - Search parameters
   * @returns {Promise<Array<ClanData>>} Array of matching clans
   * @throws {Error} If the search parameters are invalid
   */
  async searchClans(params = {}) {
    const { name = '', limit = 10 } = params;
    const searchParams = new URLSearchParams({
      name,
      limit: limit.toString(),
    }).toString();
    return this.#fetcher.fetchData(`/clans?${searchParams}`);
  }

  /**
   * @method getLocations
   * @description Get list of available locations
   * @param {number} [limit=10] - Maximum results to return
   * @returns {Promise<Array<LocationData>>} Array of location data
   * @throws {Error} If the request fails
   */
  async getLocations(limit = 10) {
    return this.#fetcher.fetchData(`/locations?limit=${limit}`);
  }
}

export default ClashOfClans;