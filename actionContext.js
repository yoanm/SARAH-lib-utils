/* global SARAH */
/**
 * @summary SARAH action context
 * @description SarahActionContext is a simple wrapper for action data
 *
 * @example <caption>Instantiation</caption>
 * const SarahActionContext = require('sarah.lib.utils/actionContext');
 * var context = new SarahActionContext(data, callback);
 *
 * @example <caption>Setter</caption>
 *  context.setSARAH(sarah);
 *
 * @example <caption>Getter</caption
 *  context.getData();
 *  context.getCallback();
 *  context.getSARAH();
 */

/**
 * @constructor
 *
 * @param {object}   data     Action data
 * @param {callable} callback Action Callback
 */
function SarahActionContext(data, callback) {
    this.data = data;
    this.callback = callback;
}

/**
 * @public
 * @returns {Object}
 */
SarahActionContext.prototype.getData = function() {
    return this.data;
};

/**
 * @public
 * @returns {callable}
 */
SarahActionContext.prototype.getCallback = function() {
    return this.callback;
};

/**
 * @public
 * For SARAH v3 (For SARAH v4 Sarah instance is global)
 * @param {SARAH} SARAH SARAH instance
 */
SarahActionContext.prototype.setSARAH = function(SARAH) {
    this.SARAH = SARAH;
};

/**
 * @public
 * @returns {SARAH}
 */
SarahActionContext.prototype.getSARAH = function() {
    return typeof SARAH === 'object'
        ? SARAH // Sarah v4
        : this.SARAH;
};

/**
 * @private
 * @type {SARAH|null}
 */
SarahActionContext.prototype.SARAH = null;
/**
 * @private
 * @type {callable}
 */
SarahActionContext.prototype.callback = null;
/**
 * @private
 * @type {Object}
 */
SarahActionContext.prototype.data = null;

/* Export class */
module.exports = SarahActionContext;
