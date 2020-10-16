const config = require('../config');
const loggerUtil = require('./logger');

const success = (res, message, data = null) => {
    const response = {
        status: true,
        message,
    };

    if (data) response.data = data;
    res.status(config.HTTP_STATUS_CODES.OK).send(response);
};

const serverError = (res, error) => {
    loggerUtil.error({ message: error.toString(), level: 'error' });

    res.status(config.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: error.toString(),
        message: 'Something went wrong, please try again',
    });
};

const validationError = (res, errors) => {
    const response = {
        status: false,
        errors,
        message: 'Validation Errors',
    };

    res.status(config.HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).json(response);
};

const badRequestError = (res, message) => {
    res.status(config.HTTP_STATUS_CODES.BAD_REQUEST).send({
        status: false,
        message,
    });
};

const authorizationError = (res, message) => {
    res.status(config.HTTP_STATUS_CODES.UNAUTHORIZED).send({
        status: false,
        message,
    });
};

const accessError = (res, message) => {
    res.status(config.HTTP_STATUS_CODES.FORBIDDEN).send({
        status: false,
        message,
    });
};

module.exports = {
    success,
    badRequestError,
    authorizationError,
    validationError,
    serverError,
    accessError,
};
