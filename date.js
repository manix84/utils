/**
 * Date utility functions
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/date', [
    'jquery',
    'utils/core',
    'utils/number'
], function ($, utilsBase, numberUtils) {
    /**
     * @exports utils/date
     * @requires jquery
     * @requires utils/core
     */
    var date = {

        /**
         * A two digit representation of a year
         * @param {date object|number} dateValue - Date class|Full Year, EG: 2003. If not set, it assumes you mean 'now'.
         * @param {boolean} [convert] - does the value being sent needs to be converted to a date.
         * @return {string} 99 or 01
         */
        getYearShort: function (dateValue, convert) {

            var year = dateValue;
            if (!!convert || (!isNaN(year) && year > 9999)) {
                year = this.convertToDate(dateValue).getFullYear();
            }

            year = String(year);
            year = year.split('');
            return year[2] + String() + year[3];
        },

        /**
         * Ante meridiem and Post meridiem
         * @param {date object|number} dateValue - Date class|24 Hour EG: 16.  If not set, it assumes you mean 'now'.
         * @param {boolean} [convert] - does the value being sent needs to be converted to a date.
         * @return {string} EG: "am" or "pm"
         */
        getHourPostfix: function (dateValue, convert) {

            var hour = dateValue;
            if (!!convert || (!isNaN(hour) && hour > 23)) {
                hour = this.convertToDate(dateValue).getHours();
            }

            if (hour < 12) {
                return 'am';
            }
            return 'pm';
        },

        /**
         * 12-hour format of an hour without leading zeros
         * @param {date object|number} dateValue - Date object|24 Hour EG: 16.  If not set, it assumes you mean 'now'.
         * @param {boolean} [convert] - does the value being sent needs to be converted to a date.
         * @return {number} EG: 1-12
         */
        get12Hours: function (dateValue, convert) {

            var hour = dateValue;
            if (!!convert || (!isNaN(hour) && hour > 23)) {
                hour = this.convertToDate(dateValue).getHours();
            }

            if (hour > 12) {
                hour += -12;
            }
            return hour;
        },

        /**
         * Difference to Greenwich time (E.G: +0200 or +02:00)
         * @param {date object|number} dateValue - Date object or timezone offset in minutes.
         * @param {boolean} addDelimiter - Should the Colon ":" be added between the hours and minutes.
         * @returns {date object}
         */
        getReadableTimezone: function (dateValue, addDelimiter) {

            var offset = dateValue,
                hours,
                minutes;

            if (utilsBase.getType(dateValue) === 'date') {
                offset = -dateValue.getTimezoneOffset();
            }

            hours = Math.floor(offset / 60);
            minutes = (offset - (hours * 60));

            addDelimiter = addDelimiter || false;

            return ((hours > 0) ? '+' : '-') +
                numberUtils.pad(hours) +
                (addDelimiter ? ':' : '') +
                numberUtils.pad(minutes);
        },

        /**
         * Whether or not the date is in daylight saving time
         * @param {date object} dateValue - Date object.
         * @example .getDSTIdentifier(new Date());  RESULTS: 1 or 0
         * @returns {date object}
         */
        getDSTIdentifier: function (dateValue) {
            dateValue = this.convertToDate(dateValue);

            var curOffset = dateValue.getTimezoneOffset(),
                normalOffset = new Date(dateValue.getFullYear(), 1, 1).getTimezoneOffset();

            if (normalOffset === curOffset) {
                return 0;
            }
            return 1;
        },

        /**
         * Converts strings and numbers into date objects.  Strings are assumed to be ISO8601's and
         * numbers are assumed to be epochs. If it's found to be anything else, the function will
         * return the current date.
         * @param {string|number|date object} value - Value taken, to be converted to a Date Object.
         * @returns {date object}
         */
        convertToDate: function (value) {
            var date,
                dateYMD,
                offSet;

            switch (utilsBase.getType(value)) {
            case 'string':
            case 'iso':
            case 'iso8601':
                if (isNaN(value)) {
                    date = value.split('T');
                    dateYMD = date[0].split('-');

                    // This is because JavaScript's Date object counts days/months from 0
                    dateYMD[1] = dateYMD[1] - 1;
                    date = dateYMD.concat(date[1].slice(0, 8).split(':'));

                    if (value.charAt(19) === 'Z') {
                        // Get local time offset from user
                        offSet = (new Date(date[0], date[1], date[2]).getTimezoneOffset() / 60);
                        // Offest is the differnce of user's local to GMT
                        // Therefore BST will be GMT - -1
                        date[3] = parseInt(date[3], 10) - offSet;
                    }

                    return new Date(date[0], date[1], date[2], date[3], date[4], date[5]);
                }
                // Else assume it's a number ...
                //   That's why their is no break here
            case 'number':
            case 'epoch':
            case 'timestamp':
                if (value > 9999999999) {
                    return new Date(value);
                }
                return new Date(value * 1000);
            case 'date':
                return value;
            default:
                // Return current timedate
                return new Date();
            }
        },

        /**
         * Converts strings, numbers and date objects into an Epoch.
         * @param {string|number|date object} value - Value taken, to be converted to an Epoch.
         * @returns {number} EG: 123456789100000
         */
        convertToEpoch: function (value) {
            var dateValue = this.convertToDate(value),
                output = ((dateValue.getTime() - dateValue.getMilliseconds()));

            return output;
        },

        /**
         * Converts strings, numbers and date objects into a Timestamp.
         * @param {string|number|date object} value - Value taken, to be converted to a Timestamp.
         * @returns {number} EG: 12345678910
         */
        convertToTimestamp: function (value) {
            var dateValue = this.convertToDate(value),
                output = (dateValue.getTime() - dateValue.getMilliseconds()) / 1000;

            return output;
        },

        /**
         * Converts strings, numbers and date objects into an ISO formated date.
         * @param {string|number|date object} value - Value taken, to be converted to an ISO formatted date.
         * @returns {string} EG: "2010-10-19T13:51:29Z"
         */
        convertToIso: function (value) {
            var dateValue = this.convertToDate(value),
                output = dateValue.getUTCFullYear() + '-' +
                    numberUtils.pad(dateValue.getUTCMonth() + 1) + '-' +
                    numberUtils.pad(dateValue.getUTCDate()) + 'T' +
                    numberUtils.pad(dateValue.getUTCHours()) + ':' +
                    numberUtils.pad(dateValue.getUTCMinutes()) + ':' +
                    numberUtils.pad(dateValue.getUTCSeconds()) + 'Z';

            return output;
        },

        /**
         * Converts strings, numbers and date objects into an ISO8601 formated date.
         * @param {string|number|date object} value - Value taken, to be converted to an ISO8601 formatted date.
         * @returns {string} EG: "2010-10-19T13:51:29+01:00"
         */
        convertToIso8601: function (value) {
            var dateValue = this.convertToDate(value),
                output = dateValue.getUTCFullYear() + '-' +
                    numberUtils.pad(dateValue.getUTCMonth() + 1) + '-' +
                    numberUtils.pad(dateValue.getUTCDate()) + 'T' +
                    numberUtils.pad(dateValue.getUTCHours()) + ':' +
                    numberUtils.pad(dateValue.getUTCMinutes()) + ':' +
                    numberUtils.pad(dateValue.getUTCSeconds()) +
                    this.getReadableTimezone(dateValue, true);

            return output;
        },

        /**
         * Converts strings, numbers and date objects into an RFC 2822 formated date.
         * @see http://www.faqs.org/rfcs/rfc2822.html
         * @param {string|number|date object} value - Value taken, to be converted to an RFC 2822 formatted date.
         * @returns {string} EG: "Tue, 19 Oct 2010 13:51:29 +0100"
         */
        convertToRFC2822: function (value) {
            var dateValue = this.convertToDate(value),
                output = this.getDayShort(dateValue) + ', ' +
                    dateValue.getDate() + ' ' +
                    this.getMonthShort(dateValue) + ' ' +
                    dateValue.getUTCFullYear() + ' ' +
                    numberUtils.pad(dateValue.getUTCHours()) + ':' +
                    numberUtils.pad(dateValue.getUTCMinutes()) + ':' +
                    numberUtils.pad(dateValue.getUTCSeconds()) + ' ' +
                    this.getReadableTimezone(dateValue);

            return output;
        }
    };

    return date;
});
