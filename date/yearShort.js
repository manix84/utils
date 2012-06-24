/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date/yearShort', function () {

    /**
     * A two digit representation of a year
     * @param {Date Object} dateValue - The date object which you want the year from.
     * @return {string} 99 or 01
     */
    var yearShort = function (dateValue) {

        var year = dateValue.getFullYear();

        year = String(year);
        year = year.split('');
        return year[2] + String() + year[3];
    };

    return yearShort;
});
