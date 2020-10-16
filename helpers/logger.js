const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

// define the custom settings for each transport (file, console)
const options = {
    infoFile: {
        level: 'info',
        filename: `${appRoot}/logs/app-info-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        handleExceptions: true,
        json: true,
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        colorize: false,
        timestamp: true,
    },
    errorFile: {
        level: 'error',
        filename: `${appRoot}/logs/app-error-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        handleExceptions: true,
        json: true,
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        colorize: false,
        timestamp: true,
    },
    debugFile: {
        level: 'debug',
        filename: `${appRoot}/logs/app-debug-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        handleExceptions: true,
        json: true,
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        colorize: false,
        timestamp: true,
    },
    console: {
        level: 'verbose',
        filename: `${appRoot}/logs/app-console-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        handleExceptions: true,
        json: true,
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        colorize: false,
        timestamp: true,
    },
};

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.DailyRotateFile(options.infoFile),
        new transports.DailyRotateFile(options.errorFile),
        new transports.DailyRotateFile(options.debugFile),
        new transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    // eslint-disable-next-line no-unused-vars
    write(message, encoding) {
        logger.verbose(message);
    },
};

module.exports = logger;
