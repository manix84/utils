/**
 * Tests for date/convert/toIso8601
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/convert/toIso8601
 */
define([
    'date/convert/toIso8601'
], function (toIso8601) {
    module('date/convert/toIso8601');

    var timestampExample = 1287496289, // Tue, 19 Oct 2010 14:51:29
        epochExample = timestampExample * 1000,
        dateExample = new Date(epochExample),

        // These can't be done by JS natively.
        isoExample = '2010-10-19T14:51:29Z',
        iso8601Example = '2010-10-19T13:51:29+01:00',
        rfc2822Example = 'Tue, 19 Oct 2010 13:51:29 +0100';

    test('toIso8601', function () {

        deepEqual(toIso8601(timestampExample), iso8601Example, 'Should convert the Timestamp to a ISO8601 Date');
        deepEqual(toIso8601(epochExample), iso8601Example, 'Should convert the Epoch to a ISO8601 Date');
        deepEqual(toIso8601(dateExample), iso8601Example, 'Should convert the JavaScript Date Object to a ISO8601 Date');
        deepEqual(toIso8601(isoExample), iso8601Example, 'Should convert the ISO to a ISO8601 Date');
        deepEqual(toIso8601(iso8601Example), iso8601Example, 'Should return the same ISO8601 Date');
        // deepEqual(toIso8601(rfc2822Example), iso8601Example, 'Should convert the RFC2822 to a ISO8601 Date');
    });
});
