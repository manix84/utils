/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/gmtOffset', function () {

    /**
     * Difference to Greenwich Time (E.G: +0200 or +02:00)
     * @param {Date} [dateObj] - Date object.
     * @param {Boolean} [addDelimiter] - Should the Colon ":" be added between the hours and minutes.
     * @returns {String}
     */
    var gmtOffset = function (dateObj, addDelimiter) {
        dateObj = dateObj || new Date();
        addDelimiter = addDelimiter || false;

        var offset = -dateObj.getTimezoneOffset(),
            hours = Math.floor(offset / 60),
            minutes = (offset - (hours * 60));

        return ((hours >= 0) ? '+' : '-') +
            pad(hours) +
            (addDelimiter ? ':' : '') +
            pad(minutes);
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
