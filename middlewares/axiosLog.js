const loggerUtil = require('../helpers/logger');

require('axios-debug-log')({
    request(debug, config) {
        const headers = JSON.stringify(config.headers);
        loggerUtil.debug({
            baseUrl: config.baseURL,
            url: config.url,
            data: config.data,
            method: config.method,
            params: JSON.stringify(config.params),
            headers,
        });
        loggerUtil.debug({ message: `Request with headers => ${config.headers['content-type']}` });
        debug(`Request with headers => ${config.headers['content-type']}`);
    },
    response(debug, response) {
        loggerUtil.debug({ message: `Response with ${response.headers['content-type']} from ${response.config.url} data ${JSON.stringify(response.data)}` });
        debug(`Response with ${response.headers['content-type']}`, `from ${response.config.url}`, `data ${JSON.stringify(response.data)}`);
    },
    error(debug, error) {
        loggerUtil.debug({ error });
        loggerUtil.error({ error });
        debug('error ', error);
    },
});
