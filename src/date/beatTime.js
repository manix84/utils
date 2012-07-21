/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/beatTime', function () {
    /**
     * Convert a javascript Date to a Swatch Internet Time (Beat Time).
     * @param {Date} [dateObj] - Date object.  If not set, it assumes you mean 'now'.
     * @return {Number} 0-1000
     */
    var beatTime = function (dateObj) {
        dateObj = dateObj || new Date();

        var dayStartEpoch = new Date(
            dateObj.getFullYear(),
            dateObj.getMonth(),
            dateObj.getDate(),
            0,
            0,
            0,
            0
        ).getTime();

        return Math.round(((dateObj - dayStartEpoch) / 1000) / (86400 / 1000));
    };

    return beatTime;
});
