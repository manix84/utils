/**
 * Tests for useragent/engine
 * @author Rob Taylor <manix84@gmail.com>
 * @module tests/useragent/engine
 * @requires useragent/engine
 */
define('tests/useragent/engine', [
    'useragent/engine'
], function (engine) {
    module('useragent');

    test('engine', function () {
        equal(Object.prototype.toString.call(engine), '[object Object]', 'engine should be an object');

        notEqual(engine.gecko, undefined, 'engine.gecko should be defined');
        notEqual(engine.khtml, undefined, 'engine.khtml should be defined');
        notEqual(engine.presto, undefined, 'engine.presto should be defined');
        notEqual(engine.htmlayout, undefined, 'engine.htmlayout should be defined');
        notEqual(engine.trident, undefined, 'engine.trident should be defined');
        notEqual(engine.webkit, undefined, 'engine.webkit should be defined');
        notEqual(engine.boxely, undefined, 'engine.boxely should be defined');
    });
});
