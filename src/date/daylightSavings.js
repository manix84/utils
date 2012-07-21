/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/daylightSavings', function () {

    /**
     * Whether or not the date is in daylight saving time
     * @param {Date} [dateObj] - Date object.
     * @returns {Boolean}
     */
    var daylightSavings = function (dateObj) {
        dateObj = dateObj || new Date();

        var curOffset = dateObj.getTimezoneOffset(),
            normalOffset = new Date(dateObj.getFullYear(), 1, 1).getTimezoneOffset();

        if (normalOffset === curOffset) {
            return 0;
        }
        return 1;
    };

    return daylightSavings;
});
