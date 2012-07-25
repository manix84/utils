/**
 * Tests for array/upperCase
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/upperCase
 */
define([
    'array/upperCase'
], function (upperCase) {
    module('array');

    test('upperCase', function () {
        equal(upperCase(['Cat', 'dOG', 'BIRD']), ['CAT', 'DOG', 'BIRD'], 'This multicase array, should now be all upper case.');
        throws(function () {
            upperCase({1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');
    });
});
