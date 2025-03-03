export default Endpoints;
export type SearchClansParams = {
    /**
     * - Clan name to search
     */
    name?: string | undefined;
    /**
     * - Minimum number of members
     */
    minMembers?: number | undefined;
    /**
     * - Maximum number of members
     */
    maxMembers?: number | undefined;
    /**
     * - Minimum clan level
     */
    minLevel?: number | undefined;
    /**
     * - Limit of results
     */
    limit?: number | undefined;
};
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
declare class Endpoints {
    /**
     * @param {SupercellAPI} api - The SupercellAPI instance
     */
    constructor(api: SupercellAPI);
    fetcher: Fetcher;
    /**
     * Gets player data
     * @param {string} playerTag - The player tag
     * @returns {Promise<any>} Player data
     */
    getPlayer(playerTag: string): Promise<any>;
    /**
     * Gets clan data
     * @param {string} clanTag - The clan tag
     * @returns {Promise<any>} Clan data
     */
    getClan(clanTag: string): Promise<any>;
    /**
     * Searches for clans
     * @param {SearchClansParams} [params] - Search parameters
     * @returns {Promise<any>} Clan search results
     */
    searchClans(params?: SearchClansParams | undefined): Promise<any>;
    /**
     * Gets location data
     * @param {number} [limit=10] - Number of locations to fetch
     * @returns {Promise<any>} Location data
     */
    getLocations(limit?: number | undefined): Promise<any>;
}
import Fetcher from "./Fetcher.js";
import SupercellAPI from "./SupercellAPI.js";
//# sourceMappingURL=Endpoints.d.ts.map