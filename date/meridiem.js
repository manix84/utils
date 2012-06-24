/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/meridiem', function () {

    /**
     * Ante meridiem and Post meridiem
     * @param {date object|number} dateValue - Date class|24 Hour EG: 16.  If not set, it assumes you mean 'now'.
     * @param {boolean} [upper] - Should return in UPPER case.
     * @return {string} EG: "am" or "pm"
     */
    var meridiem = function (dateValue, upper) {

        var hour = dateValue.getHours(),
            output = 'pm';

        if (hour < 12) {
            output = 'am';
        }

        if (!!upper) {
            return output.toUpperCase();
        }
        return output;
    };
});
