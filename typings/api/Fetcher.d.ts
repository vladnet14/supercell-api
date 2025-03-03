export default Fetcher;
/**
 * Handles HTTP requests for the Supercell API
 */
declare class Fetcher {
    /**
     * @param {SupercellAPI} api - The SupercellAPI instance
     */
    constructor(api: SupercellAPI);
    api: SupercellAPI;
    /**
     * Fetches data from the specified endpoint
     * @param {string} endpoint - The API endpoint
     * @returns {Promise<any>} The response data
     */
    fetchData(endpoint: string): Promise<any>;
}
import SupercellAPI from "./SupercellAPI.js";
//# sourceMappingURL=Fetcher.d.ts.map