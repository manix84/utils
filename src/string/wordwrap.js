/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/wordwrap', function () {

    /**
     * Wrapping strings based on their length
     * @exports string/wordwrap
     *
     * @param {String} string - String to be wrapped
     * @param {Number} [maxWidth] - Maximum number of character before break
     * @param {String} [brakeStr] - String added between breaks
     * @param {Boolean} [cutWords] - Should break be made in the middle of, or after a solid word.
     * @returns {String}
     */
    var wordwrap = function (string, maxWidth, brakeStr, cutWords) {
        var regex, parts, p;

        if (Object.prototype.toString.call(string) !== '[object String]') {
            return string;
        }

        brakeStr = brakeStr || '\n';
        maxWidth = maxWidth || 75;
        cutWords = cutWords || false;

        regex = new RegExp('.{1,' + maxWidth + '}(\\s|$)' + (cutWords ? '|.{' + maxWidth + '}|.+$' : '|\\S+?(\\s|$)'), 'g');

        return string.match(regex).join(brakeStr);
    };

    return wordwrap;
});
