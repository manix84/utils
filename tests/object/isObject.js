/**
 * Tests for object/isObject
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/isObject
 */
define([
    'object/isObject'
], function (isObject) {
    module('object');

    test('isObject', function () {
        equal(isObject({'cat': 'Felix', 'dog': 'Spot'}), true, 'Object is an object.');
        equal(isObject({}), true, 'Empty object is still an object');
        equal(isObject(['cat', 'dog']), false, 'Array is not an object.');
        equal(isObject(new Date()), false, 'Date is not an object.');
    });
});
