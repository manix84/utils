/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/meridiem', function () {

    /**
     * Ante meridiem and Post meridiem
     * @param {Date} [dateObj] - Date object.
     * @param {Boolean} [upper] - Should return in UPPER case.
     * @return {String} EG: "am" or "pm"
     */
    var meridiem = function (dateObj, upper) {
        dateObj = dateObj || new Date();

        var hour = dateObj.getHours(),
            output = 'pm';

        if (hour < 12) {
            output = 'am';
        }

        if (!!upper) {
            return output.toUpperCase();
        }
        return output;
    };
    return meridiem;
});
