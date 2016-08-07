'use strict';

require('mocha');
var assert = require('assert');
var customComponentsTutorial = require('./');

describe('custom-components-tutorial', function() {
      it('should export a function', function() {
    assert.equal(typeof customComponentsTutorial, 'function');
  });

    it('should export an object', function() {
    assert(customComponentsTutorial);
    assert.equal(typeof customComponentsTutorial, 'object');
  });

    it('should throw an error when invalid args are passed', function(cb) {
    try {
      customComponentsTutorial();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
