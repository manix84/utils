/**
 * Tests for array/lowerCase
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/lowerCase
 */
define([
    'array/lowerCase'
], function (lowerCase) {
    module('array');

    test('lowerCase', function () {
        equal(lowerCase(['Cat', 'dOG', 'BIRD']), 2, 'This multicase array, should now be all lower case.');
        throws(lowerCase({1: 'cat', 2: 'dog', 3: 'bird'}), 'Object should cause an exception.');
    });
});
