/**
 * Tests for date/yearShort
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/date/yearShort
 */
define([
    'src/date/yearShort'
], function (yearShort) {
    module('date/yearShort');

    test('yearShort', function () {
        equal(yearShort(new Date(1287496289000)), '10', 'Year Short');
    });
});
