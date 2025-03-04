export default ClashOfClans;
export type PlayerData = {
    /**
     * - Player tag
     */
    tag: string;
    /**
     * - Player name
     */
    name: string;
    /**
     * - Town Hall level
     */
    townHallLevel: number;
    /**
     * - Experience level
     */
    expLevel: number;
    /**
     * - Current trophies
     */
    trophies: number;
};
export type ClanData = {
    /**
     * - Clan tag
     */
    tag: string;
    /**
     * - Clan name
     */
    name: string;
    /**
     * - Clan type
     */
    type: string;
    /**
     * - Clan description
     */
    description: string;
    /**
     * - Clan level
     */
    clanLevel: number;
};
export type LocationData = {
    /**
     * - Location ID
     */
    id: number;
    /**
     * - Location name
     */
    name: string;
    /**
     * - Whether the location is a country
     */
    isCountry: boolean;
};
export type ClanSearchParams = {
    /**
     * - Clan name to search
     */
    name?: string | undefined;
    /**
     * - Maximum results to return
     */
    limit?: number | undefined;
    /**
     * - War frequency
     */
    warFrequency?: string | undefined;
    /**
     * - Minimum member count
     */
    minMembers?: number | undefined;
    /**
     * - Maximum member count
     */
    maxMembers?: number | undefined;
    /**
     * - Minimum clan points
     */
    minClanPoints?: number | undefined;
};
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
declare class ClashOfClans {
    /**
     * @constructor
     * @param {import('./SupercellAPI.js').default} api - SupercellAPI instance
     */
    constructor(api: import('./SupercellAPI.js').default);
    /**
     * @method getPlayer
     * @description Fetch player information by tag
     * @param {string} playerTag - Player tag with or without '#'
     * @returns {Promise<PlayerData>} Player data
     * @throws {Error} If the player tag is invalid or player not found
     */
    getPlayer(playerTag: string): Promise<PlayerData>;
    /**
     * @method getClan
     * @description Fetch clan information by tag
     * @param {string} clanTag - Clan tag with or without '#'
     * @returns {Promise<ClanData>} Clan data
     * @throws {Error} If the clan tag is invalid or clan not found
     */
    getClan(clanTag: string): Promise<ClanData>;
    /**
     * @method searchClans
     * @description Search for clans using filters
     * @param {ClanSearchParams} params - Search parameters
     * @returns {Promise<Array<ClanData>>} Array of matching clans
     * @throws {Error} If the search parameters are invalid
     */
    searchClans(params?: ClanSearchParams): Promise<Array<ClanData>>;
    /**
     * @method getLocations
     * @description Get list of available locations
     * @param {number} [limit=10] - Maximum results to return
     * @returns {Promise<Array<LocationData>>} Array of location data
     * @throws {Error} If the request fails
     */
    getLocations(limit?: number | undefined): Promise<Array<LocationData>>;
    #private;
}
//# sourceMappingURL=ClashOfClans.d.ts.map