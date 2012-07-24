/**
 * Tests for date/convert/toDate
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/convert/toDate
 */
define([
    'date/convert/toDate'
], function (toDate) {
    module('date/convert/toDate');

    var timestampExample = 1287496289, // Tue, 19 Oct 2010 14:51:29
        epochExample = timestampExample * 1000,
        dateExample = new Date(epochExample),

        // These can't be done by JS natively.
        isoExample = '2010-10-19T14:51:29Z',
        iso8601Example = '2010-10-19T14:51:29+01:00',
        rfc2822Example = 'Tue, 19 Oct 2010 14:51:29 +0100';

    test('toDate', function () {

        deepEqual(toDate(timestampExample), dateExample, 'Should convert the Timestamp to a JavaScript Date Object');
        deepEqual(toDate(epochExample), dateExample, 'Should convert the Epoch to a JavaScript Date Object');
        deepEqual(toDate(dateExample), dateExample, 'Should return the same JavaScript Date Object');
        // deepEqual(toDate(isoExample), dateExample, 'Should convert the ISO to a JavaScript Date Object');
        deepEqual(toDate(iso8601Example), dateExample, 'Should convert the ISO8601 to a JavaScript Date Object');
        // deepEqual(toDate(rfc2822Example), dateExample, 'Should convert the RFC2822 to a JavaScript Date Object');
    });
});
