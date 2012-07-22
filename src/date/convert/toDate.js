/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/convert/toDate', function () {

    /**
     * Converts strings and numbers into date objects.  Strings are assumed to be ISO8601's and
     * numbers are assumed to be epochs. If it's found to be anything else, the function will
     * return the current date.
     * @param {string|number|date object} value - Value taken, to be converted to a Date Object.
     * @returns {date object}
     */
    var convertToDate = function (value) {
        var isoCheck = /(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?/,
            offset = 0,
            date, offsetTmp;

        switch (Object.prototype.toString.call(value)) {
        case '[object String]':
            if (isNaN(value)) {
                date = value.match(isoCheck);
                return new Date(
                    parseInt(date[1], 10),
                    (parseInt(date[2], 10) - 1),
                    parseInt(date[3], 10),
                    parseInt(date[4], 10),
                    parseInt(date[5], 10),
                    parseInt(date[6], 10),
                    (date[7] || 0)
                );
            }
            // Else assume it's a number ...
            return convertToDate(parseInt(value, 10));
        case '[object Number]':
            if (value > 9999999999) {
                return new Date(value);
            }
            return new Date(value * 1000);
        case '[object Date]':
            return value;
        default:
            // Return current timedate
            return new Date();
        }
    };

    return convertToDate;
});
