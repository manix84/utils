/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/convert/toRFC2822', [
    'date/convert/toDate',
    'date/dayName',
    'date/monthName'
], function (convertToDate, dayName, monthName) {

    /**
     * Converts strings, numbers and date objects into an RFC 2822 formated date.
     * @see http://www.faqs.org/rfcs/rfc2822.html
     * @param {string|number|date object} value - Value taken, to be converted to an RFC 2822 formatted date.
     * @returns {string} EG: "Tue, 19 Oct 2010 13:51:29 +0100"
     */
    var convertToRFC2822 = function (value) {
        var dateValue = convertToDate(value),
            output = dayName(dateValue, true) + ', ' +
                dateValue.getDate() + ' ' +
                monthName(dateValue, true) + ' ' +
                dateValue.getUTCFullYear() + ' ' +
                pad(dateValue.getUTCHours()) + ':' +
                pad(dateValue.getUTCMinutes()) + ':' +
                pad(dateValue.getUTCSeconds()) + ' ' +
                offset(dateValue);

        return output;
    },
    pad = function (input) {
        var output = String(input);
        while (output.length < 2) {
            output = "0" + output;
        }
        return output;
    },
    offset = function (dateObj) {
        var offset = -dateObj.getTimezoneOffset(),
            hours = Math.floor(offset / 60),
            minutes = (offset - (hours * 60));
        return ((hours >= 0) ? '+' : '-') +
            pad(hours) + pad(minutes);
    };

    return convertToRFC2822;
});
