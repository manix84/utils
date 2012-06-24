/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/daylightSavings', function () {

    /**
     * Whether or not the date is in daylight saving time
     * @param {date object} dateValue - Date object.
     * @returns {Boolean}
     */
    var daylightSavings = function (dateValue) {
        dateValue = this.convertToDate(dateValue);

        var curOffset = dateValue.getTimezoneOffset(),
            normalOffset = new Date(dateValue.getFullYear(), 1, 1).getTimezoneOffset();

        if (normalOffset === curOffset) {
            return 0;
        }
        return 1;
    };

    return daylightSavings;
});
