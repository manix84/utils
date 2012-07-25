/**
 * Tests for array/match
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/match
 */
define([
    'array/match'
], function (match) {
    module('array');

    test('match', function () {
        equal(match(['cat', 'dog', 'bird'], ['cat', 'dog', 'bird']), true, 'These two arrays should match');
        equal(match(['cat', 'bird'], ['dog', 'bird']), false, 'These two arrays should not match');

        throws(function () {
            match(['cat', 'dog', 'bird'], {1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');

        throws(function () {
            match({1: 'cat', 2: 'dog', 3: 'bird'}, ['cat', 'dog', 'bird']);
        }, 'Object should cause an exception.');

        throws(function () {
            match({1: 'cat', 2: 'dog', 3: 'bird'}, {1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');
    });
});
