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
        equal(lowerCase(['Cat', 'dOG', 'BIRD']), ['cat', 'dog', 'bird'], 'This multicase array, should now be all lower case.');
        throws(function () {
            lowerCase({1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');
    });
});
