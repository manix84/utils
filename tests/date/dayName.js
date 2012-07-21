/**
 * Tests for date/dayName
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/date/dayName
 */
define([
    'src/date/dayName'
], function (dayName) {
    module('date/dayName');

    test('dayName', function () {
        equal(dayName(new Date(1287496289000)), 'Tuesday', 'Day Name');
        equal(dayName(new Date(1287496289000), true), 'Tue', 'Day Name, Short');
    });
});
