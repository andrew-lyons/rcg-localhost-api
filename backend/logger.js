const logger = module.exports = require('winston')

logger.add(new logger.transports.File(
{
    name: 'debug-file',
    filename: 'log.log',
    level: 'debug',
    handleExceptions: true,
    humanReadableUnhandledException: true,
    exitOnError: true,
    json: false,
    maxsize: 104857600,
    maxfiles: 5
}))

logger.add(new logger.transports.Console(
{
    name: 'error-console',
    level: 'error',
    handleExceptions: true,
    humanReadableUnhandledException: true,
    exitOnError: true
}))