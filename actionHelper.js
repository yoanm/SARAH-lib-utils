/**
 * @summary SARAH action helper
 * @description SarahActionHelper provide helpful methods regarding action
 * for module which want to run in SARAH v3 AND v4
 *
 * @requires sarahVersion
 *
 * @example <caption>Instantiation</caption>
 * const SarahActionHelper = require('sarah.lib.utils/actionHelper');
 * var helper = new SarahActionHelper(<SarahActionContext> actionContext);
 *
 * @example <caption>Helper</caption>
 *  helper.speak(tts);
 *
 * @example <caption>Getter</caption
 *  helper.getContext();
 *
 * @example <caption>S.A.R.A.H. module integration</caption
 * // MyModule.js
 * MyModule.prototype.process = function (helper) {
 *     helper.speak('c\'est partis');
 *
 *     // @var {SarahActionContext} context
 *     var context = helper.getContext();
 *     // @var {object} data
 *     var data = context.getData();
 *     // @var {callable} callback
 *     var callback = context.getCallback();
 *     // @var {SARAH} sarah
 *     var sarah = context.getSARAH();
 *
 *     if (data.action == 'action1') {
 *         ...
 *     }
 *     ...
 * };
 */

const version = require('./version');

/**
 * @constructor
 *
 * @param {SarahActionContext} actionContext
 */
function SarahActionHelper(actionContext) {
    this.actionContext = actionContext;
}

/**
 * @public
 *
 * @param {string} tts Text to speach
 */
SarahActionHelper.prototype.speak = function(tts) {
    var callback = this.actionContext.getCallback();
    if (version.isV3() === true) {
        callback({tts: tts});
    } else {
        this.actionContext
            .getSARAH()
            .speak(tts);
        callback();
    }
};

/**
 * @public
 *
 * @returns {SarahActionContext}
 */
SarahActionHelper.prototype.getContext = function() {
    return this.actionContext;
};

/**
 * @private
 * @type {SarahActionContext}
 */
SarahActionHelper.prototype.actionContext = null;

/* Export class */
module.exports = SarahActionHelper;
