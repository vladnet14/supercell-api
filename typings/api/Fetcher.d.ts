export default Fetcher;
/**
 * @class Fetcher
 * @description Handles HTTP requests for the Supercell API
 */
declare class Fetcher {
    /**
     * @constructor
     * @param {SupercellAPI} api - The SupercellAPI instance
     */
    constructor(api: SupercellAPI);
    api: SupercellAPI;
    /**
     * @method fetchData
     * @description Fetches data from the specified endpoint
     * @param {string} endpoint - The API endpoint
     * @returns {Promise<any>} The response data
     * @throws {Error} If request fails or API returns error
     */
    fetchData(endpoint: string): Promise<any>;
}
import SupercellAPI from "./SupercellAPI.js";
//# sourceMappingURL=Fetcher.d.ts.map