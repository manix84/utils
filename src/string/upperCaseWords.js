/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/upperCaseWords', function () {

    /**
     * Capitalise the first letter each word.
     * @param {string} string - String to be capitalised
     * @returns {string}
     */
    var upperCaseWords = function (string) {
        return (string + String()).replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    };

    return upperCaseWords;
});
