/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/convert/toIso', [
    'utils/date/convert/toDate'
], function (convertToDate) {

    /**
     * Converts strings, numbers and date objects into an ISO formated date.
     * @param {string|number|date object} value - Value taken, to be converted to an ISO formatted date.
     * @returns {string} EG: "2010-10-19T13:51:29Z"
     */
    var convertToIso = function (value) {
        var dateValue = this.convertToDate(value),
            output = dateValue.getUTCFullYear() + '-' +
                pad(dateValue.getUTCMonth() + 1) + '-' +
                pad(dateValue.getUTCDate()) + 'T' +
                pad(dateValue.getUTCHours()) + ':' +
                pad(dateValue.getUTCMinutes()) + ':' +
                pad(dateValue.getUTCSeconds()) + 'Z';

        return output;
    },
    pad = function (input) {
        var output = String(input);
        while (output.length < 2) {
            output = "0" + output;
        }
        return output;
    };

    return convertToIso;
});
