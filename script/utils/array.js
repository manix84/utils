/**
 * Useful utilities for arrays, missing from vanilla JavaScript and jQuery.
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/array', [
    'jquery',
    'utils/core'
], function ($, utilsBase) {
    /**
     * @exports utils/array
     * @requires jquery
     * @requires utils/core
     */
    var array = {

        /**
         * Checks whether argument passed is an array
         * @param {mixed} array item to be tested
         * @returns {boolean}
         */
        isArray: function (array) {
            return (utilsBase.getType(array) === 'array');
        },

        /**
         * Returns the index of the value in the array passed. If the value can't be found, the return value is -1
         * @param {mixed} value the value that is supposed to be checked
         * @param {array} array the array to be checked
         * @returns {number}
         */
        arrayIndexOf: function (value, array) {
            var i = 0;

            // if indexOf is supported we will use the native functionality
            if (array.indexOf) {
                return array.indexOf(value);
            }

            for (; i < array.length; i++) {
                if (array[i] === value) {
                    return i;
                }
            }

            return -1;
        },

        /**
         * Converts an array to an object with the array values as keys and empty strings as the value. Note that
         * objects can't have duplicate keys, hence there is a chance that duplicates will be missing from the
         * object. This function works best with array values of strings and is handy for 'for ... in ...' loops
         * or if .... in .... style checking
         * @example // Array
         * arrayToObject(['hello', 'world']) // RESULT {'hello': '', 'world': ''}
         * @param {array} array - A the array to be converted
         * @returns {object} The newly created object
         */
        arrayToObject: function (array) {
            var i = 0,
                o = {};

            for (; i < array.length; i++) {
                o[array[i]] = '';
            }

            return o;
        },

        /**
         * Are the arrays matching
         * @param {array} arrayA The first array to check against the second
         * @param {array} arrayB The second array to check against the first
         * @returns {boolean}
         */
        match: function (arrayA, arrayB) {
            var i = 0;

            for (; i < arrayA.length; i++) {
                if ((utilsBase.getType(arrayA[i]) === 'array' && !this.match(arrayA[i], arrayB[i])) ||
                        (utilsBase.getType(arrayA[i]) !== 'array' && arrayA[i] != arrayB[i])) {
                    return false;
                }
            }
            return true;
        },

        /**
         * Pick one or more random entries out of an array (multiple values not implimented yet)
         * @param {array} array the array to have items randomly retreieved from
         * //@param {mixed} reqNum the number of array items wanted back
         * @returns {mixed}
         * @todo Add functionality for the second parameter.
         */
        rand: function (array) {
            var index = Math.floor(Math.random() * array.length);

            return array[index];
        },

        /**
         * Checks if a value exists in an array
         * @param {mixed} value The searched value
         * @param {array} The array to be searched
         * @returns {boolean}
         */
        inArray: function (value, array) {
            var i = 0;

            for (; i < array.length; i++) {
                if ((utilsBase.getType(array[i]) === 'array' && this.inArray(value, array[i])) ||
                        (utilsBase.getType(array[i]) !== 'array' && array[i] == value)) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Change all array string values to uppercase.
         * @param {array} The array to be uppercased
         * @returns {array}
         */
        upperCase: function (array) {
            var i = 0;

            for (; i < array.length; i++) {
                switch (utilsBase.getType(array[i])) {
                case 'array':
                    array[i] = this.upperCase(array[i]);
                    break;
                case 'string':
                    array[i] = array[i].toUpperCase();
                    break;
                }
            }

            return array;
        },

        /**
         * Change all array string values to lowercase.
         * @param {array} The array to be lowercased
         * @returns {array}
         */
        lowerCase: function (array) {
            var i = 0;

            for (; i < array.length; i++) {
                switch (utilsBase.getType(array[i])) {
                case 'array':
                    array[i] = this.lowerCase(array[i]);
                    break;
                case 'string':
                    array[i] = array[i].toLowerCase();
                    break;
                }
            }

            return array;
        }
    };

    return array;
});