/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/twelveHourTime', function () {

    /**
     * 12-hour format of an hour without leading zeros
     * @param {Date} [dateObj] - Date object.
     * @return {Number} EG: 1-12
     */
    var twelveHourTime = function (dateObj) {
        dateObj = dateObj || new Date();

        var hour = dateObj.getHours();

        if (hour > 12) {
            hour += -12;
        }
        return hour;
    };
    return twelveHourTime;
});
