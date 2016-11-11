/* globals debug, log, info, warn, error */
/**
 * @summary SARAH logger
 * @description SarahLogger will automatically add the channel
 *  in front of the message string
 *
 * @example <caption>Instantiation</caption>
 * const SarahLogger = require('sarah.lib.utils/logger');
 * var logger = new SarahLogger('channel');
 *
 * @example <caption>Helper</caption>
 *  logger.debug(message);
 *  logger.log(message);
 *  logger.info(message);
 *  logger.warn(message);
 *  logger.error(message);
 */

/**
 * @constructor
 *
 * @param {string} channel
 */
function SarahLogger(channel) {
    this.channel = channel;
}
/**
 * @public
 * @see global debug function
 *
 * @param {string} msg
 */
SarahLogger.prototype.debug = function(msg) {
    debug.apply(this, [this.prependChannel(msg)]);
};
/**
 * @public
 * @see global log function
 *
 * @param {string} msg
 */
SarahLogger.prototype.log = function(msg) {
    log.apply(this, [this.prependChannel(msg)]);
};
/**
 * @public
 * @see global info function
 *
 * @param {string} msg
 */
SarahLogger.prototype.info = function(msg) {
    info.apply(this, [this.prependChannel(msg)]);
};
/**
 * @public
 * @see global warn function
 *
 * @param {string} msg
 */
SarahLogger.prototype.warn = function(msg) {
    warn.apply(this, [this.prependChannel(msg)]);
};
/**
 * @public
 * @see global error function
 *
 * @param {string} msg
 */
SarahLogger.prototype.error = function(msg) {
    error.apply(this, [this.prependChannel(msg)]);
};

/**
 * @private
 *
 * @param {string} msg
 *
 * @returns {string}
 */
SarahLogger.prototype.prependChannel = function(msg) {
    return '[' + this.channel + '] ' + msg;
};
/**
 * @private
 * @type {string}
 */
SarahLogger.prototype.channel = null;

/* Export class */
module.exports = SarahLogger;
