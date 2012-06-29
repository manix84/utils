/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/truncate', function () {

    /**
     * Truncating strings based on their length
     * @param {string} string - String truncated
     * @param {number} [maxWidth] - Maximum number of character before cut
     * @param {string} [brakeStr] - String added after break
     * @param {boolean} [cutWords] - String added after break
     * @returns {string}
     */
    var truncate = function (string, maxWidth, brakeStr, cutWords) {
        var i = 0,
            totalWords = 0,
            brakeLen = 1,
            bits = [];

        brakeStr = brakeStr || '&hellip;';
        maxWidth = maxWidth || 75;
        cutWords = cutWords || false;

        if (!/^\&[a-z]+\;$/i.exec(brakeStr)) {
            brakeLen = brakeStr.length;
        }

        if (string.length > maxWidth) {
            if (cutWords) {
                string = (string.substring(0, (maxWidth - brakeLen)) + brakeStr);
            } else {
                bits = string.split('');

                for(i = bits.length - 1; i > -1; --i) {
                    // Chop the string to the maximum limit length regardess of boundary
                    if (i > maxWidth - brakeLen) {
                        bits.length = i;
                    // If the current character matches the boundary character, chop here, and break out of the loop
                    } else if (' ' === bits[i]) {
                        bits.length = i;
                        break;
                    }
                }
                string = string.substr(0, bits.length) + brakeStr;
            }
        }
        return string;
    };

    return truncate;
});
