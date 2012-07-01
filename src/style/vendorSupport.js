/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('style/vendorSupport', function () {

    /**
     * Test whether browser vendor supports the given CSS property.
     * @exports style/vendorSupport
     *
     * @param {String} property - Name of CSS property to test. Must be in CamelCase i.e. "borderRadius".
     * @return {Boolean}
     */
    var vendorSupport = function (property) {
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
        if (el.style[property] !== undefined) {
            return true;
        }

        property = property.charAt(0).toUpperCase() + property.slice(1);

        for (i in prefixes) {
            if (prefixes.hasOwnProperty(i) && el.style[prefixes[i] + property] !== undefined) {
                return true;
            }
        }
        return false;
    };

    return vendorSupport;
});
