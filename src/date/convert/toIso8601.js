/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/convert/toIso8601', [
    'utils/date/convert/toDate'
], function (convertToDate) {

    /**
     * Converts strings, numbers and date objects into an ISO8601 formated date.
     * @param {string|number|date object} value - Value taken, to be converted to an ISO8601 formatted date.
     * @returns {string} EG: "2010-10-19T13:51:29+01:00"
     */
    var convertToIso8601 = function (value) {
        var dateValue = this.convertToDate(value),
            output = dateValue.getUTCFullYear() + '-' +
                numberUtils.pad(dateValue.getUTCMonth() + 1) + '-' +
                numberUtils.pad(dateValue.getUTCDate()) + 'T' +
                numberUtils.pad(dateValue.getUTCHours()) + ':' +
                numberUtils.pad(dateValue.getUTCMinutes()) + ':' +
                numberUtils.pad(dateValue.getUTCSeconds()) +
                this.getReadableTimezone(dateValue, true);

        return output;
    };

    return convertToIso8601;
});
