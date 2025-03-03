import SupercellAPI from './api/SupercellAPI.js';
import Endpoints from './api/Endpoints.js';

/**
 * @typedef {import('./api/SupercellAPI.js').SupercellAPIConfig} SupercellAPIConfig
 */

/**
 * Main Supercell API client
 * @extends {SupercellAPI}
 */
class SupercellClient extends SupercellAPI {
  /**
   * @param {SupercellAPIConfig} config - Configuration object
   */
  constructor(config) {
    super(config);
    /**
     * @type {Endpoints}
     */
    this.endpoints = new Endpoints(this);
  }
}

export default SupercellClient;
