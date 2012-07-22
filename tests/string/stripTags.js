/**
 * Tests for string/stripTags
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/stripTags
 */
define([
    'string/stripTags'
], function (stripTags) {
    module('string/stripTags');

    test('stripTags', function () {
        equal(stripTags("<span><a href='link.html'>A</a> Str</span>ing"), "A String", 'All Tags Should Be Stripped From The String.');
    });
});
