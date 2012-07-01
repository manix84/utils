/**
 * @author Rob Taylor [manix84@gmail.com]
 */

define('jscript/removeInlineScripts', function () {

    /**
     * Remove all inline scripts from a html string.
     * @exports jscript/removeInlineScripts
     *
     * @params {string} string - A string of html which may or may not contain a script tag.
     * @returns {string} returns the html without any script tags.
     */
    var removeInlineScripts = function (string) {
        // regular expression that searches for script tags and gets the content
        // this regular expression is only supposed to match script tags that contain inline scripts
        var getScripts = /<script[^>]*>(?!\s*<\/script>)([\s\S]*?)<\/script>/gi;

        return string.replace(getScripts, '');
    };

    return removeInlineScripts;
});
