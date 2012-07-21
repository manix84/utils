/**
 * Tests for utils/support
 * @author Rob Taylor [manix84@gmail.com]
 * @module tests/utils/supportTest
 * @requires utils/support
 * @requires utils/core
 */
define('tests/utils/supportTest', [
    'utils/support',
    'utils/core'
], function (support, utilsBase) {
    module('Utils.Support');

    test('"Namespaces"', function () {
        equal(utilsBase.getType(support), 'object', 'Support is a function');
    });

    test('property', function () {
        equal(utilsBase.getType(support.cssProperty), 'function', 'Support.Property should be a function');

        notEqual(support.cssProperty('borderRadius'), undefined, 'Support.Property should return in a boolean when used');
        notEqual(support.cssProperty('textShadow'), undefined, 'Support.Property should return in a boolean when used');
    });


});
