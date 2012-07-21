/**
 * Tests for date/daylightSavings
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/date/daylightSavings
 */
define([
    'src/date/daylightSavings'
], function (daylightSavings) {
    module('date/daylightSavings');

    test('daylightSavings', function () {
        equal(daylightSavings(new Date(1287496289000)), 1, 'Is it daylight savings time?');
    });
});
