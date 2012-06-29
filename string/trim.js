/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/trim', function () {

    /**
     * Trim whitespace from the beginning and end of a string, for when trim() is unavailable
     * @param {string} string - String with excessive whitespace
     * @returns {string}
     */
    var trim = function (string) {
        if (typeof String.prototype.trim !== 'function') {
            return string.replace(/\s+[.\^\s]+\s+/g, '');
        }
        return string.trim();
    };

    return trim;
});
