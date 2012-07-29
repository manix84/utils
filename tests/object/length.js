/**
 * Tests for object/length
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/length
 */
define([
    'object/length'
], function (length) {
    module('object');

    test('length', function () {
        equal(length({}), 0, 'Object length is 0.');
        equal(length({'cat': 'Felix', 'dog': 'Spot'}), 2, 'Object length is 2.');
    });
});
