/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/repeat', function () {

    /**
     * Repeat the given string as many times as requested.
     * @exports string/repeat
     *
     * @param {String} string - String to be repeated
     * @param {Number} width - Number of times the string should be repeated.
     * @returns {String}
     */
    var repeat = function (string, num) {
        num = (isNaN(num) ? 1 : (num > 0 ? num : 1));
        return new Array(num + 1).join(string);
    };

    return repeat;
});
