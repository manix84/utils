/**
 * Support utility to identify what the current browser is capable of.
 * @author Rob Taylor [manix84@gmail.com]
 */

define('utils/support', function () {
    /** @exports utils/support */
    var support = {

        /**
         * Test whether browser supports the given CSS property.
         * @param {string} prop - Name of CSS property to test. Must be in CamelCase i.e. "borderRadius".
         * @return {boolean}
         */
        cssProperty: function (prop) {
            // create element to peform property detection against
            var el = document.createElement("div"),
                i,
                prefixes = [
                    "Webkit",   // Chrome & Safari
                    "Moz",      // Firefox
                    "O",        // Opera
                    "Ms",       // IE
                    "Khtml"     // Konqueror
                ];

            // test standard property name first
            if (el.style[prop] !== undefined) {
                return true;
            }

            prop = prop.charAt(0).toUpperCase() + prop.slice(1);

            for (i in prefixes) {
                if (prefixes.hasOwnProperty(i) && el.style[prefixes[i] + prop] !== undefined) {
                    return true;
                }
            }
            return false;
        }
    };

    return support;
});
