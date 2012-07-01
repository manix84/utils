/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/wordwrap', function () {

    /**
     * Wrapping strings based on their length
     * @exports string/wordwrap
     *
     * @param {String} string - String to be wrapped
     * @param {Number} [width] - Maximum number of character before break
     * @param {String} [brake] - String added between breaks
     * @param {Boolean} [cut] - Should break be made in the middle of, or after a solid word.
     * @returns {String}
     */
    var wordwrap = function (string, width, brake, cut) {
        var regex, parts, p;

        if (Object.prototype.toString.call(string) !== '[object String]') {
            return string;
        }

        brake = brake || '\n';
        width = width || 75;
        cut = cut || false;

        regex = new RegExp('.{1,' + width + '}(\\s|$)' + (cut ? '|.{' + width + '}|.+$' : '|\\S+?(\\s|$)'), 'g');

        return string.match(regex).join(brake);
    };

    return wordwrap;
});
