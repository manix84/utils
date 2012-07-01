/**
 * Tests for date/convert/toTimestamp
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/date/convert/toTimestamp
 */
define([
    'src/date/convert/toTimestamp'
], function (toTimestamp) {
    module('date/convert/toTimestamp');

    var timestampExample = 1287496289, // Tue, 19 Oct 2010 14:51:29
        epochExample = timestampExample * 1000,
        dateExample = new Date(epochExample),

        // These can't be done by JS natively.
        isoExample = '2010-10-19T14:51:29Z',
        iso8601Example = '2010-10-19T13:51:29+01:00',
        rfc2822Example = 'Tue, 19 Oct 2010 13:51:29 +0100';

    test('toTimestamp', function () {

        deepEqual(toTimestamp(timestampExample), timestampExample, 'Should return the same Timestamp');
        deepEqual(toTimestamp(epochExample), timestampExample, 'Should convert the Epoch to a Timestamp');
        deepEqual(toTimestamp(dateExample), timestampExample, 'Should convert the JavaScript Date Object to a Timestamp');
        deepEqual(toTimestamp(isoExample), timestampExample, 'Should convert the ISO to a Timestamp');
        deepEqual(toTimestamp(iso8601Example), timestampExample, 'Should convert the ISO8601 to a Timestamp');
        // deepEqual(toTimestamp(rfc2822Example), timestampExample, 'Should convert the RFC2822 to a Timestamp');
    });
});
