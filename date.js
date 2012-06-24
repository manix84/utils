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
