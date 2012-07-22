/**
 * Tests for date/daylightSavings
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/daylightSavings
 */
define([
    'date/daylightSavings'
], function (daylightSavings) {
    module('date/daylightSavings');

    test('daylightSavings', function () {
        equal(daylightSavings(new Date(1287496289000)), 1, 'Is it daylight savings time?');
    });
});
