/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/twelveHourTime', function () {

    /**
     * 12-hour format of an hour without leading zeros
     * @param {date object|number} dateValue - Date object|24 Hour EG: 16.  If not set, it assumes you mean 'now'.
     * @param {boolean} [convert] - does the value being sent needs to be converted to a date.
     * @return {number} EG: 1-12
     */
    var twelveHourTime = function (dateValue, convert) {

        var hour = dateValue;
        if (!!convert || (!isNaN(hour) && hour > 23)) {
            hour = this.convertToDate(dateValue).getHours();
        }

        if (hour > 12) {
            hour += -12;
        }
        return hour;
    };
    return twelveHourTime;
});
