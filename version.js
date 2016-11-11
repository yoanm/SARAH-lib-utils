/* globals module, Config */
/**
 * @summary Sarah version helper
 * @description Provide helpful methods to deal with Sarah version
 *
 * @example
 * const version = require('sarah.lib.utils/version');
 *
 * @example <caption>Helper</caption>
 *  version.isV3();
 *  version.isV4();
 *  version.get();
 *
 * @example <caption>get usage</caption>
 *  var versionNumber = version.get();
 *  if (version.v3 == versionNumber) {
 *      ...
 *  }
 *  if (version.v4 == versionNumber) {
 *      ...
 *  }
 *
 */

var sarahVersion = {};

/**
 * @public
 * @readOnly
 * @type {int}
 */
sarahVersion.v3 = 3;
/**
 * @public
 * @readOnly
 * @type {int}
 */
sarahVersion.v4 = 4;

/**
 * @public
 *
 * @returns {boolean}
 */
sarahVersion.isV3 = function() {
    return typeof Config === 'undefined';
};

/**
 * @public
 *
 * @returns {boolean}
 */
sarahVersion.isV4 = function() {
    return !this.isV3();
};

/**
 * @public
 *
 * @returns {int}
 */
sarahVersion.get = function() {
    return this.isV3() ? this.v3 : this.v4;
};

module.exports = sarahVersion;
