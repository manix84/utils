/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/repeat', function () {

    /**
     * Repeat the given string as many times as requested.
     * @exports string/repeat
     *
     * @param {String} string - String to be repeated
     * @param {Number} num - Number of times the string should be repeated.
     * @returns {String}
     */
    var repeat = function (string, num) {
        num = num || 0;
        return new Array(num + 1).join(string);
    };

    return repeat;
});
