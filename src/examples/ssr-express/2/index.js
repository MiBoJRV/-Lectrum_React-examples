const path = require('path');

// eslint-disable-next-line node/no-extraneous-require,node/no-unpublished-require,import/no-extraneous-dependencies
require('@babel/register')({
    configFile: path.resolve(__dirname, './babel.config.js'),
});

require('./server');
