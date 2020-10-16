const responseHelper = require('./response');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    if (typeof err === 'string') {
        // custom application error
        return responseHelper.badRequestError(res, err);
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return responseHelper.badRequestError(res, err.message);
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return responseHelper.authorizationError(res, err.message);
    }

    if (err.message === 'Not allowed by CORS') {
        // jwt authentication error
        return responseHelper.accessError(res, err.message);
    }

    // default to 500 server error
    // eslint-disable-next-line no-console
    console.log(err);
    return responseHelper.serverError(res, 'Internal server error!');
}

module.exports = errorHandler;
