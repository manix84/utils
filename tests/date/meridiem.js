/**
 * Tests for date/meridiem
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/meridiem
 */
define([
    'date/meridiem'
], function (meridiem) {
    module('date');

    test('meridiem', function () {
        equal(meridiem(new Date(1287496289000)), 'pm', 'Time meridiem (EG: am/pm)');
        equal(meridiem(new Date(1287496289000), true), 'PM', 'Time meridiem, uppercase (EG: AM/PM)');
    });
});
