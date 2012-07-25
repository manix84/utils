/**
 * Tests for string/trim
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/trim
 */
define([
    'string/trim'
], function (trim) {
    module('string');

    test('trim', function () {
        equal(trim('  A String       '), "A String", 'All space before and after the string should be removed.');
    });
});
