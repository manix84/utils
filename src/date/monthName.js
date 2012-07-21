/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/monthName', function () {

    /**
     * A short textual representation of a month, three letters
     * @param {Date Object} dateValue - Date class|Month 1-12.  If not set, it assumes you mean 'now'.
     * @param {Boolean} [short] -
     * @return {String} EG: "Jan"
     */
    var monthName = function (dateValue, short) {

        switch (dateValue.getMonth()) {
        case 0:
            return (!!short ? 'Jan' : 'January');
        case 1:
            return (!!short ? 'Feb' : 'Feburary');
        case 2:
            return (!!short ? 'Mar' : 'March');
        case 3:
            return (!!short ? 'Apr' : 'April');
        case 4:
            return 'May';
        case 5:
            return (!!short ? 'Jun' : 'June');
        case 6:
            return (!!short ? 'Jul' : 'July');
        case 7:
            return (!!short ? 'Aug' : 'August');
        case 8:
            return (!!short ? 'Sep' : 'September');
        case 9:
            return (!!short ? 'Oct' : 'October');
        case 10:
            return (!!short ? 'Nov' : 'November');
        case 11:
            return (!!short ? 'Dec' : 'December');
        }
    };

    return monthName;
});
