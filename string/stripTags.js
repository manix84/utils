/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/string/stripTags', function () {

    /**
     * Remove HTML tags from string
     * @param {string} string - String with xml tags
     * @param  {string} tag - Tag to replace, optional
     * @returns {string}
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
