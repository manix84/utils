/**
 * Tests for date/gmtOffset
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/date/gmtOffset
 */
define([
    'src/date/gmtOffset'
], function (gmtOffset) {
    module('date/gmtOffset');

    test('gmtOffset', function () {
        equal(gmtOffset(new Date(1287496289000)), '+0100', "GMT Offset (without delimiter)");
        equal(gmtOffset(new Date(1287496289000), true), '+01:00', "GMT Offset (with delimiter)");
    });
});
