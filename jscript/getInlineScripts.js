/**
 * @author Rob Taylor [manix84@gmail.com]
 */

define('utils/jscript/getInlineScripts', function () {

    /**
     * Takes a string and parses it for all inline script tags. It returns an array of all the
     * scripts found and removes them from the string. If no scripts are found, it returns an empty array.
     * @params {string} string - The string that is supposed to be parsed
     * @returns {Array} Array of scripts to be evaled. If no scripts are found, it returns
     *          an empty array.
     */
    var getInlineScripts = function (string) {
        // regular expression that searches for script tags and gets the content
        // this regular expression is only supposed to match script tags that contain inline scripts
        // var rscript = /<script[^>]*>(?!\s*<\/script>)([\s\S]*?)<\/script>/i,
        // NB: FOR WHATEVER REASON, THE REGULAR EXPRESSION ABOVE WORKS, WHEREAS IF WE CONSTRUCT
        // IT LIKE THIS, IT DOESN'T... ELSE WE COULD USE THE PROPERTY AS IS USED IN THE REMOVEINLINESCRIPT
        // TO CONSTRUCT OUR REGEX
        var getScripts = /<script[^>]*>(?!\s*<\/script>)([\s\S]*?)<\/script>/i,
            scripts = [],
            results;

        do {
            results = getScripts.exec(string);
            // save the script
            if (results) {
                if (results[1]) {
                    scripts.push(results[1]);
                }
            }
            string = string.replace(getScripts, '');
        } while (results);

        return scripts;
    };

    return getInlineScripts;

});
