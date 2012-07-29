/**
 * Tests for object/keys
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/keys
 */
define([
    'object/keys'
], function (keys) {
    module('object');

    test('keys', function () {
        deepEqual(keys({'cat': 'Felix', 'dog': 'Spot'}), ['cat', 'dog'], 'Object keys are returned as an array.');
    });
});
