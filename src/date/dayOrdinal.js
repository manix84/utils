/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/dayOrdinal', function () {

    /**
     * English ordinal suffix for the day of the month, 2 characters
     * @param {date object|number} dateValue - Date class|Day 1-28/31.  If not set, it assumes you mean 'now'.
     * @param {boolean} [convert] - does the value being sent needs to be converted to a date.
     * @return {string} EG: "th"
     */
    var dayOrdinal = function (dateValue) {

        switch (dateValue.getDate()) {
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
