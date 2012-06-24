/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/convert/toDate', function () {

    /**
     * Converts strings and numbers into date objects.  Strings are assumed to be ISO8601's and
     * numbers are assumed to be epochs. If it's found to be anything else, the function will
     * return the current date.
     * @param {string|number|date object} value - Value taken, to be converted to a Date Object.
     * @returns {date object}
     */
    var toDate = function (value) {
        var date,
            dateYMD,
            offSet;

        switch (utilsBase.getType(value)) {
        case 'string':
        case 'iso':
        case 'iso8601':
            if (isNaN(value)) {
                date = value.split('T');
                dateYMD = date[0].split('-');

                // This is because JavaScript's Date object counts days/months from 0
                dateYMD[1] = dateYMD[1] - 1;
                date = dateYMD.concat(date[1].slice(0, 8).split(':'));

                if (value.charAt(19) === 'Z') {
                    // Get local time offset from user
                    offSet = (new Date(date[0], date[1], date[2]).getTimezoneOffset() / 60);
                    // Offest is the differnce of user's local to GMT
                    // Therefore BST will be GMT - -1
                    date[3] = parseInt(date[3], 10) - offSet;
                }

                return new Date(date[0], date[1], date[2], date[3], date[4], date[5]);
            }
            // Else assume it's a number ...
            return parseInt(toDate(value), 10);
        case 'number':
        case 'epoch':
        case 'timestamp':
            if (value > 9999999999) {
                return new Date(value);
            }
            return new Date(value * 1000);
        case 'date':
            return value;
        default:
            // Return current timedate
            return new Date();
        }
    };

    return toDate;
});
