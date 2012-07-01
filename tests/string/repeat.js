/**
 * Tests for string/repeat
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/string/repeat
 */
define([
    'src/string/repeat'
], function (repeat) {
    module('string/repeat');

    test('repeat', function () {
        equal(repeat("-="), "", 'A String Repeated, With No Repeats Specified.');
        equal(repeat("-=", 0), "", 'A String Repeated Zero Times');
        equal(repeat("-=", 1), "-=", 'A String Repeated Once');
        equal(repeat("-=", 2), "-=-=", 'A String Repeated Twice');
        equal(repeat("-=", 3), "-=-=-=", 'A String Repeated Twice');
    });
});
