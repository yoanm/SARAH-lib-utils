S.A.R.A.H. utils lib
====================

Library with helpful class for [S.A.R.A.H](http://encausse.net/s-a-r-a-h)

## Installation
```bash
> npm install sarahLibUtils --save
```

## Usage

### Version
Provide helpful methods to deal with Sarah version
```javascript
// Load
const version = require('sarah.lib.utils/sarahVersion');
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
Provide helpful methods to deal with Sarah version
```javascript
// Load
const SarahLogger = require('sarahLibUtils/logger');
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
