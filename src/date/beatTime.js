/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/beatTime', function () {
    /**
     * Convert a javascript Date to a Swatch Internet Time (Beat Time).
     * @param {date object} dateValue Date class.  If not set, it assumes you mean 'now'.
     * @return {number} 0-1000
     */
    var beatTime = function (dateValue) {

        var dayStartEpoch = new Date(
            dateValue.getFullYear(),
            dateValue.getMonth(),
            dateValue.getDate(),
            0,
            0,
            0,
            0
        ).getTime();

        return Math.round(((dateValue - dayStartEpoch) / 1000) / (86400 / 1000));
    };

    return beatTime;
});
