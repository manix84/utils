/**
 * Tests for useragent/isTouchEnabled
 * @author Rob Taylor <manix84@gmail.com>
 * @module tests/useragent/isTouchEnabled
 * @requires useragent/isTouchEnabled
 */
define([
    'useragent/isTouchEnabled'
], function (isTouchEnabled) {
    module('useragent');

    test('isTouchEnabled', function () {
        equal(Object.prototype.toString.call(isTouchEnabled), '[object Boolean]', 'isTouchEnabled should be a Boolean value');

        notEqual(isTouchEnabled, undefined, 'isTouchEnabled should be defined');
    });
});
