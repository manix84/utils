/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/upperCaseFirst', function () {

    /**
     * Capitalise the first letter of the string.
     * @param {string} string - String to be capitalised
     * @returns {string}
     */
    var upperCaseFirst = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return upperCaseFirst;
});
