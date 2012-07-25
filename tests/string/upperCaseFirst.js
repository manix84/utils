/**
 * Tests for string/upperCaseFirst
 * @author Rob Taylor [manix84@gmail.com]
 * @requires string/upperCaseFirst
 */
define([
    'string/upperCaseFirst'
], function (upperCaseFirst) {
    module('string');

    test('upperCaseFirst', function () {
        equal(upperCaseFirst('a string with a few words in it.'), 'A string with a few words in it.', 'The First Letter In The String Should Be Capitalised.');
    });
});
