/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/gmtOffset', function () {

    /**
     * Difference to Greenwich Time (E.G: +0200 or +02:00)
     * @param {date object} dateValue - Date object or timezone offset in minutes.
     * @param {boolean} addDelimiter - Should the Colon ":" be added between the hours and minutes.
     * @returns {date object}
     */
    var gmtOffset = function (dateValue, addDelimiter) {
        addDelimiter = addDelimiter || false;

        var offset = -dateValue.getTimezoneOffset(),
            hours = Math.floor(offset / 60),
            minutes = (offset - (hours * 60));

        output = ((hours > 0) ? '+' : '-') +
            pad(hours) +
            (addDelimiter ? ':' : '') +
            pad(minutes);

        return output;
    },
    pad = function (input) {
        var output = String(input);
        while (output.length < 2) {
            output = "0" + output;
        }
        return output;
    };

    return gmtOffset;
});
