var modifyBabelPreset = require('modify-babel-preset');

module.exports = modifyBabelPreset('es2015', {
    'transform-es2015-modules-commonjs': false
});
