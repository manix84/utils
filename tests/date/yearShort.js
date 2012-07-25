/**
 * Tests for date/yearShort
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/yearShort
 */
define([
    'date/yearShort'
], function (yearShort) {
    module('date');

    test('yearShort', function () {
        equal(yearShort(new Date(1287496289000)), '10', 'Year Short');
    });
});
