/**
 * Tests for string/truncate
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/string/truncate
 */
define([
    'src/string/truncate'
], function (truncate) {
    module('string/truncate');

    test('truncate', function () {
        equal(truncate('A semi long string to be truncated.', 15), "A semi long&hellip;", 'A &hellip; should be added in the middle of the string, while trying to preserve words.');
        equal(truncate('A semi long string to be truncated.', 15, '...'), "A semi long...", 'A ... should be added in the middle of the string, while trying to preserve words.');
        equal(truncate('A semi long string to be truncated.', 15, null, true), "A semi long st&hellip;", 'A &hellip; should be added in the middle of the string, without preserving words.');
        equal(truncate('A semi long string to be truncated.', 15, '...', true), "A semi long ...", 'A ... should be added in the middle of the string, without preserving words.');
    });
});
