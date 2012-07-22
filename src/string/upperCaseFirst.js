/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/upperCaseFirst', function () {

    /**
     * Capitalise the first letter of the string.
     * @exports string/upperCaseFirst
     *
     * @param {String} string - String to be capitalised
     * @returns {String}
     */
    var upperCaseFirst = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return upperCaseFirst;
});
