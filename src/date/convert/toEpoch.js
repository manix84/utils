/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/convert/toEpoch', [
    'date/convert/toDate'
], function (convertToDate) {

    /**
     * Converts strings, numbers and date objects into an Epoch.
     * @param {string|number|date object} value - Value taken, to be converted to an Epoch.
     * @returns {number} EG: 123456789100000
     */
    var convertToEpoch = function (value) {
        var dateValue = convertToDate(value),
            output = ((dateValue.getTime() - dateValue.getMilliseconds()));

        return output;
    };

    return convertToEpoch;
});
