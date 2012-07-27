/**
 * Tests for number/pad
 * @author Rob Taylor [manix84@gmail.com]
 * @requires number/pad
 */
define([
    'number/pad'
], function (pad) {
    module('number');

    test('pad', function () {
        equal(pad(1), '01', 'Pad defaults to two characters long.');
        equal(pad(2, 10), '0000000002', '9 zeros have been added to the start of the number.');
        throws(function () {
            pad('cat');
        }, 'String should cause an exception.');
    });
});
