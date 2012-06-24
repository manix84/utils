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
