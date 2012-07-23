/**
 * Tests for date/convert/toIso
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/convert/toIso
 */
define([
    'date/convert/toIso'
], function (toIso) {
    module('date/convert/toIso');

    var timestampExample = 1287496289, // Tue, 19 Oct 2010 14:51:29
        epochExample = timestampExample * 1000,
        dateExample = new Date(epochExample),

        // These can't be done by JS natively.
        isoExample = '2010-10-19T14:51:29Z',
        iso8601Example = '2010-10-19T13:51:29+01:00',
        rfc2822Example = 'Tue, 19 Oct 2010 13:51:29 +0100';

    test('toIso', function () {

        deepEqual(toIso(timestampExample), isoExample, 'Should convert the Timestamp to a ISO Date');
        deepEqual(toIso(epochExample), isoExample, 'Should convert the Epoch to a ISO Date');
        deepEqual(toIso(dateExample), isoExample, 'Should convert the JavaScript Date Object to a ISO Date');
        // deepEqual(toIso(isoExample), isoExample, 'Should return the same ISO Date');
        deepEqual(toIso(iso8601Example), isoExample, 'Should convert the ISO8601 to a ISO Date');
        // deepEqual(toIso(rfc2822Example), isoExample, 'Should convert the RFC2822 to a ISO Date');
    });
});
