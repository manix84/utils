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
                if (!!date[8]) {
                    switch (date[8].charAt(0)) {
                    case 'Z':
                        // Get local time offset from user
                        offset = -(new Date(date[1], (date[2] - 1), date[3]).getTimezoneOffset() / 60);
                        break;
                    case '+':
                    case '-':
                        offsetTmp = date[8].slice(1, 8).split(':');
                        offset = parseInt(offsetTmp[0], 10);
                        offset = (date[8].charAt(0) === '-') ? -offset : offset;
                        break;
                    }
                }
                return new Date(Date.UTC(
                    parseInt(date[1], 10),              // Year
                    (parseInt(date[2], 10) - 1),        // Months
                    parseInt(date[3], 10),              // Days
                    (parseInt(date[4], 10) - offset),   // Hours
                    parseInt(date[5], 10),              // Minutes
                    parseInt(date[6], 10),              // Seconds
                    (date[7] || 0)                      // Milliseconds
                ));
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
