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
                numberUtils.pad(dateValue.getUTCMonth() + 1) + '-' +
                numberUtils.pad(dateValue.getUTCDate()) + 'T' +
                numberUtils.pad(dateValue.getUTCHours()) + ':' +
                numberUtils.pad(dateValue.getUTCMinutes()) + ':' +
                numberUtils.pad(dateValue.getUTCSeconds()) + 'Z';

        return output;
    };

    return convertToIso;
});
