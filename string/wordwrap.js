/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/wordwrap', function () {

    /**
     * Wrapping strings based on their length
     * @param {String} string - String to be wrapped
     * @param {Number} width - Maximum number of character before break
     * @param {String} brake - String added between breaks
     * @param {Boolean} cut - Should break be made in the middle of, or after a solid word.
     * @returns {String}
     */
    var wordwrap = function (string, width, brake, cut) {
        var regex, parts, p;

        if (utilsBase.getType(string) !== 'string') {
            return string;
        }

        brake = brake || '\n';
        width = width || 75;
        cut = cut || false;

        regex = '.{1,' + width + '}(\\s|$)' + (cut ? '|.{' + width + '}|.+$' : '|\\S+?(\\s|$)');
        parts = string.match(new RegExp(regex, 'g'));

        for (p in parts) {
            if (parts.hasOwnProperty(p)) {
                parts[p] = $.trim(parts[p]);
            }
        }

        return string.match(new RegExp(regex, 'g')).join(brake);
    };

    return wordwrap;
});
