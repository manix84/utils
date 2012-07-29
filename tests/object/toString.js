/**
 * Tests for object/toString
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/toString
 */
define([
    'object/toString'
], function (toString) {
    module('object');

    test('toString', function () {
        equal(toString({'cat': 'Felix', 'dog': 'Spot'}), '{"cat":"Felix","dog":"Spot"}', 'Object has been converted to a string.');
    });
});
