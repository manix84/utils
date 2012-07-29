/**
 * Tests for object/getType
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/getType
 */
define([
    'object/getType'
], function (getType) {
    module('object');

    test('getType', function () {
        equal(getType({'cat': 'Felix', 'dog': 'Spot'}), 'object', 'Plain object is correctly identified.');
        equal(getType(Array('cat', 'dog', 'bird')), 'array', 'Long-form array is correctly identified.');
        equal(getType(['cat', 'dog', 'bird']), 'array', 'Short-form array is correctly identified.');
        equal(getType(String('cat')), 'string', 'Long-form string is correctly identified.');
        equal(getType('cat'), 'string', 'Short-form string is correctly identified.');
        equal(getType(true), 'boolean', 'Boolean is correctly identified.');
        equal(getType(false), 'boolean', 'Boolean is correctly identified.');
        equal(getType(0), 'number', 'Number (zero) is correctly identified.');
        equal(getType(1), 'number', 'Number (integer) is correctly identified.');
        equal(getType(1.23456789), 'number', 'Number (float) is correctly identified.');
        equal(getType(new Date()), 'date', 'Date is correctly identified.');
        equal(getType(function () {}), 'function', 'Function is correctly identified.');
        equal(getType(null), 'null', 'Null is correctly identified.');
    });
});
