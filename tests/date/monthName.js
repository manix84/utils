/**
 * Tests for date/monthName
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/monthName
 */
define([
    'date/monthName'
], function (monthName) {
    module('date/monthName');

    test('monthName', function () {
        equal(monthName(new Date(1287496289000)), 'October', 'Month Name');
        equal(monthName(new Date(1287496289000), true), 'Oct', 'Month Name, Short');
    });
});
