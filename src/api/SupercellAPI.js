/**
 * @typedef {Object} SupercellAPIConfig
 * @property {string} token - The API token
 * @property {boolean} [useProxy=false] - Whether to use proxy (true) or not (false)
 * @property {'clashofclans' | 'clashroyale' | 'brawlstars'} apiType - API type
 */

/**
 * Represents the Supercell API client configuration
 */
class SupercellAPI {
  /** @type {string} */
  token;
  /** @type {boolean} */
  useProxy;
  /** @type {'clashofclans' | 'clashroyale' | 'brawlstars'} */
  apiType;
  /** @type {{ Authorization: string, Accept: string }} */
  headers;
  /** @type {string} */
  baseUrl;

  /**
   * @param {SupercellAPIConfig} config - Configuration object
   */
  constructor({ token, useProxy = false, apiType }) {
    if (!token) {
      throw new Error('API token is required');
    }
    if (!apiType) {
      throw new Error('API type is required');
    }

    this.token = token;
    this.useProxy = useProxy;

    const lowerApiType = apiType.toLowerCase();
    if (lowerApiType !== 'clashofclans' && lowerApiType !== 'clashroyale' && lowerApiType !== 'brawlstars') {
      throw new Error(
        `Unsupported API type: ${apiType}. Supported types: clashofclans, clashroyale, brawlstars`
      );
    }
    this.apiType = lowerApiType;

    this.headers = {
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    };
    this.baseUrl = this.getBaseUrl();
  }

  /**
   * Determines the base URL based on apiType and proxy
   * @returns {string} The base URL
   */
  getBaseUrl() {
    /** @type {{ [key in 'clashofclans' | 'clashroyale' | 'brawlstars']: string }} */
    const apiMap = {
      clashofclans: 'https://api.clashofclans.com/v1',
      clashroyale: 'https://api.clashroyale.com/v1',
      brawlstars: 'https://api.brawlstars.com/v1',
    };

    if (this.useProxy) {
      /** @type {{ [key in 'clashofclans' | 'clashroyale' | 'brawlstars']: string }} */
      const proxyMap = {
        clashofclans: 'https://cocproxy.royaleapi.dev/v1',
        clashroyale: 'https://proxy.royaleapi.dev/v1',
        brawlstars: 'https://bsproxy.royaleapi.dev/v1',
      };
      return proxyMap[this.apiType];
    }
    return apiMap[this.apiType];
  }
}

export default SupercellAPI;