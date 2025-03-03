export default SupercellAPI;
export type SupercellAPIConfig = {
    /**
     * - The API token
     */
    token: string;
    /**
     * - Whether to use proxy (true) or not (false)
     */
    useProxy?: boolean | undefined;
    /**
     * - API type
     */
    apiType: 'clashofclans' | 'clashroyale' | 'brawlstars';
};
/**
 * @typedef {Object} SupercellAPIConfig
 * @property {string} token - The API token
 * @property {boolean} [useProxy=false] - Whether to use proxy (true) or not (false)
 * @property {'clashofclans' | 'clashroyale' | 'brawlstars'} apiType - API type
 */
/**
 * Represents the Supercell API client configuration
 */
declare class SupercellAPI {
    /**
     * @param {SupercellAPIConfig} config - Configuration object
     */
    constructor({ token, useProxy, apiType }: SupercellAPIConfig);
    /** @type {string} */
    token: string;
    /** @type {boolean} */
    useProxy: boolean;
    /** @type {'clashofclans' | 'clashroyale' | 'brawlstars'} */
    apiType: 'clashofclans' | 'clashroyale' | 'brawlstars';
    /** @type {{ Authorization: string, Accept: string }} */
    headers: {
        Authorization: string;
        Accept: string;
    };
    /** @type {string} */
    baseUrl: string;
    /**
     * Determines the base URL based on apiType and proxy
     * @returns {string} The base URL
     */
    getBaseUrl(): string;
}
//# sourceMappingURL=SupercellAPI.d.ts.map