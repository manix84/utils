/**
 * Tests for date/convert/toRFC2822
 * @author Rob Taylor [manix84@gmail.com]
 * @requires date/convert/toRFC2822
 */
define([
    'date/convert/toRFC2822'
], function (toRFC2822) {
    module('date/convert/toRFC2822');

    var timestampExample = 1287496289, // Tue, 19 Oct 2010 14:51:29
        epochExample = timestampExample * 1000,
        dateExample = new Date(epochExample),

        // These can't be done by JS natively.
        isoExample = '2010-10-19T14:51:29Z',
        iso8601Example = '2010-10-19T14:51:29+01:00',
        rfc2822Example = 'Tue, 19 Oct 2010 14:51:29 +0100';

    test('toRFC2822', function () {

        deepEqual(toRFC2822(timestampExample), rfc2822Example, 'Should convert the Timestamp to a RFC2822 Date');
        deepEqual(toRFC2822(epochExample), rfc2822Example, 'Should convert the Epoch to a RFC2822 Date');
        deepEqual(toRFC2822(dateExample), rfc2822Example, 'Should convert the JavaScript Date Object to a RFC2822 Date');
        // deepEqual(toRFC2822(isoExample), rfc2822Example, 'Should convert the ISO to a RFC2822 Date');
        deepEqual(toRFC2822(iso8601Example), rfc2822Example, 'Should convert the ISO8601 to a RFC2822 Date');
        // deepEqual(toRFC2822(rfc2822Example), rfc2822Example, 'Should return the same RFC2822 Date');
    });
});
