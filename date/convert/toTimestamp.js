/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/convert/toEpoch', [
    'utils/date/convert/toTimestamp'
], function (convertToDate) {

    /**
     * Converts strings, numbers and date objects into a Timestamp.
     * @param {string|number|date object} value - Value taken, to be converted to a Timestamp.
     * @returns {number} EG: 12345678910
     */
    var convertToTimestamp = function (value) {
        var dateValue = this.convertToDate(value),
            output = (dateValue.getTime() - dateValue.getMilliseconds()) / 1000;

        return output;
    };

    return convertToTimestamp;
});
