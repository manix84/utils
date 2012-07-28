/**
 * Tests for number/round
 * @author Rob Taylor [manix84@gmail.com]
 * @requires number/round
 */
define([
    'number/round'
], function (round) {
    module('number');

    test('round', function () {
        equal(round(1.23456789), 1, 'Round defaults 0 decimal places.');
        equal(round(1.23456789, 5), 1.23457, 'Their should be 5 decimal places on this number. It started with 8.');
        throws(function () {
            round('cat');
        }, 'First argument must be an integer.');
        throws(function () {
            round(1.23456789, 'cat');
        }, 'Second argument must be an integer.');
    });
});
