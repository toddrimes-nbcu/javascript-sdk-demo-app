import optimizely from "@optimizely/optimizely-sdk";
import createInstance from "@optimizely/optimizely-sdk";
import logger from "@optimizely/optimizely-sdk";
import {datafileURL} from '../../constants';
import {LOG_LEVEL} from "@optimizely/optimizely-sdk";

require('es6-promise').polyfill();
require('isomorphic-fetch');

class OptimizelyManager {
    // instantiate the Optimizely client
    static async createInstance() {
        let datafile = await _getDatafile();
        return optimizely.createInstance({
            sdkKey: '7z5hrtn1z8JTpuN9wyjDJ',
            datafile: datafile
        });
    }
}

export default OptimizelyManager;

// fetch JSON datafile from CDN
async function _getDatafile() {
    return await fetch(datafileURL)
        .then(function (response) {
            if (response.status >= 400) {
                console.log('Error downloading datafile');
            }
            console.log('GOT THE datafile');
            return response.json();
        });
}