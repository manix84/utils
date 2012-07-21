/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/dayOrdinal', function () {

    /**
     * English ordinal suffix for the day of the month, 2 characters
     * @param {Date} [dateObj] - Date object.
     * @param {Boolean} [convert] - does the value being sent needs to be converted to a date.
     * @return {String} EG: "th"
     */
    var dayOrdinal = function (dateObj) {
        dateObj = dateObj || new Date();

        switch (dateObj.getDate()) {
        case 1:
        case 21:
        case 31:
            return 'st';
        case 2:
        case 22:
            return 'nd';
        case 3:
        case 23:
            return 'rd';
        default:
            return 'th';
        }
    };

    return dayOrdinal;
});
