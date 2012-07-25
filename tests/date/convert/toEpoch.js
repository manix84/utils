/**
 * Tests for date/convert/toEpoch
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/convert/toEpoch
 */
define([
    'date/convert/toEpoch'
], function (toEpoch) {
    module('date/convert');

    var timestampExample = 1287496289, // Tue, 19 Oct 2010 14:51:29
        epochExample = timestampExample * 1000,
        dateExample = new Date(epochExample),

        // These can't be done by JS natively.
        isoExample = '2010-10-19T14:51:29Z',
        iso8601Example = '2010-10-19T14:51:29+01:00',
        rfc2822Example = 'Tue, 19 Oct 2010 14:51:29 +0100';

    test('toEpoch', function () {

        deepEqual(toEpoch(timestampExample), epochExample, 'Should convert the Timestamp to a Epoch Date');
        deepEqual(toEpoch(epochExample), epochExample, 'Should return the same Epoch Date');
        deepEqual(toEpoch(dateExample), epochExample, 'Should convert the JavaScript Date Object to a Epoch Date');
        // deepEqual(toEpoch(isoExample), epochExample, 'Should convert the ISO to a Epoch Date');
        deepEqual(toEpoch(iso8601Example), epochExample, 'Should convert the ISO8601 to a Epoch Date');
        // deepEqual(toEpoch(rfc2822Example), epochExample, 'Should convert the RFC2822 to a Epoch Date');
    });
});
