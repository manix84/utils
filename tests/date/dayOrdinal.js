/**
 * Tests for date/dayOrdinal
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/dayOrdinal
 */
define([
    'date/dayOrdinal'
], function (dayOrdinal) {
    module('date');

    test('dayOrdinal', function () {
        equal(dayOrdinal(new Date(1287496289000)), 'th', "Day Ordinal (EG: 'th', 'st', 'rd')");
    });
});
