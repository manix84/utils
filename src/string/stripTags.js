/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('string/stripTags', function () {

    /**
     * Remove HTML tags from string
     * @exports string/stripTags
     *
     * @param {String} string - String with xml tags
     * @param  {String} [tag] - Tag to replace
     * @returns {String}
     */
    var stripTags = function (string, tag) {
        if (tag) {
            var regex = new RegExp('<' + tag + '>([.\\s\\S])*?</' + tag + '>', 'g');
            return string.replace(regex, '');
        }
        return string.replace(/<[^>]+>/ig, '');
    };

    return stripTags;
});
