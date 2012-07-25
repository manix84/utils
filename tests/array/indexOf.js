/**
 * Tests for array/indexOf
 * @author Rob Taylor [manix84@gmail.com]
 * @requires array/indexOf
 */
define([
    'array/indexOf'
], function (indexOf) {
    module('array');

    test('indexOf', function () {
        equal(indexOf('bird', ['cat', 'dog', 'bird']), 2, 'Array item "bird" was found at array index 2.');
        equal(indexOf('fish', ['cat', 'dog', 'bird']), -1, 'Array item "fish" was not found, so returned -1.');
        throws(function () {
            indexOf('cat', {1: 'cat', 2: 'dog', 3: 'bird'});
        }, 'Object should cause an exception.');
    });
});
