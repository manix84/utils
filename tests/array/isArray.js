/**
 * Tests for array/isArray
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/isArray
 */
define([
    'array/isArray'
], function (isArray) {
    module('array');

    test('isArray', function () {
        equal(isArray(['cat', 'dog', 'bird']), true, "\"['cat', 'dog', 'bird']\" is an array");
        equal(isArray({1: 'cat', 2: 'dog', 3: 'bird'}), false, "\"{1: 'cat', 2: 'dog', 3: 'bird'}\" is not an array.");
    });
});
