/**
 * Tests for string/upperCaseWords
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/upperCaseWords
 */
define([
    'string/upperCaseWords'
], function (upperCaseWords) {
    module('string/upperCaseWords');

    test('upperCaseWords', function () {
        equal(upperCaseWords('a string with a few words in it.'), 'A String With A Few Words In It.', 'The First Letter In Each Word Of The String Should Be Capitalised.');
    });
});
