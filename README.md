S.A.R.A.H. utils lib
====================

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/yoanm/SARAH-lib-utils/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/yoanm/SARAH-lib-utils/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/yoanm/SARAH-lib-utils/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/yoanm/SARAH-lib-utils/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/yoanm/SARAH-lib-utils/badges/build.png?b=master)](https://scrutinizer-ci.com/g/yoanm/SARAH-lib-utils/build-status/master)

[![npm](https://img.shields.io/npm/v/sarah-lib-utils.svg)](https://www.npmjs.com/package/SARAH-lib-utils) [![license](https://img.shields.io/npm/l/sarah-lib-utils.svg)](https://www.npmjs.com/package/SARAH-lib-utils)

[![npm stat](https://nodei.co/npm/sarah-lib-utils.png)](https://www.npmjs.com/package/SARAH-lib-utils)


Library with helpful class for [S.A.R.A.H.](http://encausse.net/s-a-r-a-h)

## Installation
```bash
> npm install sarah-lib-utils --save
```

## Usage

### S.A.R.A.H. integration
```javascript
/** your_plugin_name.js */

const sarahLibUtils = require('sarah-lib-utils');
const SarahActionContext = sarahLibUtils.SarahActionContext;
const SarahActionHelper = sarahLibUtils.SarahActionHelper;
const version = sarahLibUtils.version;

exports.action = function (data, callback, config, SARAH) {
    var context = new SarahActionContext(data, callback);
    var helper = new SarahActionHelper(context);
    if (version.isV3()) {
         context.setSARAH(SARAH); // For v3 compatibility
    }
    var monModule = new MyModule();
    monModule.process(helper);
};
```

### Version
Provide helpful methods to deal with Sarah version
```javascript
// Load
const version = require('sarah-lib-utils/version');
// Helper
var isV3 = version.isV3();
var isV4 = version.isV4();
var sarahVersion = version.get();
if (version.v3 == versionNumber) {
    ...
}
if (version.v4 == sarahVersionNumber) {
    ...
}
```

### Logger
SarahLogger will automatically add the channel in front of the message string
```javascript
// Load
const SarahLogger = require('sarah-lib-utils/logger');
// Instantiate
var logger = new SarahLogger('channel');
// Helper
var message = 'myMessage';
logger.debug(message); // Will output 'debug: [channel] myMessage'
logger.log(message);   // Will output 'log: [channel] myMessage'
logger.info(message);  // Will output 'info: [channel] myMessage'
logger.warn(message);  // Will output 'warn: [channel] myMessage'
logger.error(message); // Will output 'error: [channel] myMessage'
```

### Action Context
SarahActionContext is a simple wrapper for action data
```javascript
// Load
const SarahActionContext = require('sarah-lib-utils/actionContext');
// Instantiate
var context = new SarahActionContext(data, callback);
// Setter
context.setSARAH(sarah);
// Getter
context.getData();
context.getCallback();
context.getSARAH();
```

### Action Helper
SarahActionHelper provide helpful methods regarding action for module which want to run in SARAH v3 AND v4

#### Basics
```javascript
// Load
const SarahActionHelper = require('sarah-lib-utils/actionHelper');
// Instantiate
var helper = new SarahActionHelper(<SarahActionContext> actionContext);
// helper
helper.speak(tts);
// Getter
helper.getContext();
```

#### S.A.R.A.H. module integration
```javascript
/** MyModule.js */
/**
 * @public
 *
 * @param {object}            data
 * @param {SarahActionHelper} helper
 */
MyModule.prototype.process = function (helper) {
    helper.speak('c\'est partis');
    /** @var {SarahActionContext} context */
    var context = helper.getContext();
    /** @var {object} data */
    var data = context.getData();
    /** @var {callable} callback */
    var callback = context.getCallback();
    /** @var {SARAH} sarah
    var sarah = context.getSARAH();
    
    if (data.action == 'action1') {
       ...
    }
    ...
};
```

## Tests
```bash
> npm test
```

## Coverage
```bash
> npm run coverage
```
Then open the `coverage/index.js.html` file in a browser

## EsLint
```bash
> npm run eslint
```

## Release History

* `1.0.0` : Initial release
* `1.1.0` : Readme badges
* `1.1.1` : Fix npm version

