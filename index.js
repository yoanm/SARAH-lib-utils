/* globals module */
/**
 * @summary SARAH utils library
 * @description Library with helpful class for S.A.R.A.H.
 *
 * @example <caption>S.A.R.A.H. integration</caption>
 * // your_plugin_name.js
 * const sarahLibUtils = require('sarah-lib-utils');
 * const SarahActionContext = sarahLibUtils.SarahActionContext;
 * const SarahActionHelper = sarahLibUtils.SarahActionHelper;
 * const version = sarahLibUtils.version;
 * exports.action = function (data, callback, config, SARAH) {
 *     var context = new SarahActionContext(data, callback);
 *     var helper = new SarahActionHelper(context);
 *     if (version.isV3()) {
 *          context.setSARAH(SARAH); // For v3 compatibility
 *     }
 *     var monModule = new MyModule();
 *     monModule.process(helper);
 * };
 */

var sarahLibUtils = {};
sarahLibUtils.SarahActionContext = require('./actionContext');
sarahLibUtils.SarahActionHelper = require('./actionHelper');
sarahLibUtils.SarahLogger = require('./logger');
sarahLibUtils.version = require('./version');

module.exports = sarahLibUtils;
