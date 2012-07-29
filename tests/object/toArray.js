/**
 * Tests for object/toArray
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/toArray
 */
define([
    'object/toArray'
], function (toArray) {
    module('object');

    test('toArray', function () {
        deepEqual(toArray({'cat': 'Felix', 'dog': 'Spot'}), ['Felix', 'Spot'], 'Object values have been returned in an array.');
    });
});
