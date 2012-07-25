/**
 * Tests for date/beatTime
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/beatTime
 */
define([
    'date/beatTime'
], function (beatTime) {
    module('date');

    test('beatTime', function () {
        equal(beatTime(new Date(1287496289000)), 619, 'Swatch Beat Time');
    });
});
