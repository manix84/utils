/**
 * Tests for object/isEmpty
 * @author Rob Taylor [manix84@gmail.com]
 * @requires object/isEmpty
 */
define([
    'object/isEmpty'
], function (isEmpty) {
    module('object');

    test('isEmpty', function () {
        equal(isEmpty({'cat': 'Felix', 'dog': 'Spot'}), false, 'Object is not empty.');
        equal(isEmpty({}), true, 'Object is empty.');
    });
});
