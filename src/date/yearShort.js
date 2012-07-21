/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/yearShort', function () {

    /**
     * A two digit representation of a year
     * @param {Date} [dateObj] - Date object.
     * @return {Number} 99 or 01
     */
    var yearShort = function (dateObj) {
        dateObj = dateObj || new Date();

        var year = dateObj.getFullYear();

        return Number(String(year).substr(2, 2));
    };

    return yearShort;
});
