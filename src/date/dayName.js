/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/dayName', function () {

    /**
     * A textual representation of a day, three letters.
     * @param {Date Object} dateValue Date class|Day 0-6.  If not set, it assumes you mean 'now'.
     * @param {Boolean} [short] Shorthand version of day name.
     * @return {string} "Sun" or "Sundar"
     */
    var dayName = function (dateValue, short) {
        switch (dateValue.getDay()) {
        case 0:
            return (!!short ? 'Sun' : 'Sunday');
        case 1:
            return (!!short ? 'Mon' : 'Monday');
        case 2:
            return (!!short ? 'Tue' : 'Tuesday');
        case 3:
            return (!!short ? 'Wed' : 'Wednesday');
        case 4:
            return (!!short ? 'Thu' : 'Thursday');
        case 5:
            return (!!short ? 'Fri' : 'Friday');
        case 6:
            return (!!short ? 'Sat' : 'Saturday');
        }
    };

    return dayName;
});
