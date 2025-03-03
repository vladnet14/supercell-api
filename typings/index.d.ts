export default SupercellClient;
export type SupercellAPIConfig = import('./api/SupercellAPI.js').SupercellAPIConfig;
/**
 * @typedef {import('./api/SupercellAPI.js').SupercellAPIConfig} SupercellAPIConfig
 */
/**
 * Main Supercell API client
 * @extends {SupercellAPI}
 */
declare class SupercellClient extends SupercellAPI {
    /**
     * @type {Endpoints}
     */
    endpoints: Endpoints;
}
import SupercellAPI from "./api/SupercellAPI.js";
import Endpoints from "./api/Endpoints.js";
//# sourceMappingURL=index.d.ts.map