/**
 * Tests for string/wordCount
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/wordCount
 */
define([
    'string/wordCount'
], function (wordCount) {
    module('string/wordCount');

    test('wordCount', function () {
        equal(wordCount('a string with a few words in it.'), 8, 'Their Are 8 Words That Should Be Counted.');
        equal(wordCount('a string with a few words in it.', 1).length, 8, 'Their Are 8 Words That Should Be Returned In An Array.');
    });
});
