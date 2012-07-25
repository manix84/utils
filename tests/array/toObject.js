/**
 * Tests for array/toObject
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/toObject
 */
define([
    'array/toObject'
], function (toObject) {
    module('array');

    test('toObject', function () {
        equal(toObject(['cat', 'dog', 'bird']), {0: 'cat', 1: 'dog', 2: 'bird'}, 'Array should successfully be an object now.');
        throws(function () {
            toObject({1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');
    });
});
