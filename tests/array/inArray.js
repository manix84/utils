/**
 * Tests for array/inArray
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/inArray
 */
define([
    'array/inArray'
], function (inArray) {
    module('array');

    test('inArray', function () {
        equal(inArray('bird', ['cat', 'dog', 'bird']), true, 'Array item "bird" was found.');
        equal(inArray('fish', ['cat', 'dog', 'bird']), false, 'Array item "fish" was not found.');
        throws(function () {
            inArray('cat', {1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');
    });
});
