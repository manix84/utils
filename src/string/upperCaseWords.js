/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/upperCaseWords', function () {

    /**
     * Capitalise the first letter each word.
     * @exports string/upperCaseWords
     *
     * @param {String} string - String to be capitalised
     * @returns {String}
     */
    var upperCaseWords = function (string) {
        return (string + String()).replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    };

    return upperCaseWords;
});
