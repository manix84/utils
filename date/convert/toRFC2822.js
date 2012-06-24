/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/convert/toIso8601', [
    'utils/date/convert/toDate'
], function (convertToDate) {

    /**
     * Converts strings, numbers and date objects into an RFC 2822 formated date.
     * @see http://www.faqs.org/rfcs/rfc2822.html
     * @param {string|number|date object} value - Value taken, to be converted to an RFC 2822 formatted date.
     * @returns {string} EG: "Tue, 19 Oct 2010 13:51:29 +0100"
     */
    var convertToRFC2822 = function (value) {
        var dateValue = this.convertToDate(value),
            output = this.getDayShort(dateValue) + ', ' +
                dateValue.getDate() + ' ' +
                this.getMonthShort(dateValue) + ' ' +
                dateValue.getUTCFullYear() + ' ' +
                numberUtils.pad(dateValue.getUTCHours()) + ':' +
                numberUtils.pad(dateValue.getUTCMinutes()) + ':' +
                numberUtils.pad(dateValue.getUTCSeconds()) + ' ' +
                this.getReadableTimezone(dateValue);

        return output;
    };

    return convertToRFC2822;
});
