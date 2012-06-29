/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/useragent/engine', function () {

    /**
     * This may return all "false"'s, and a version of 0, because the browser engine is not always reported.
     * @property engine {object}
     * @property engine.trident {float|boolean} Internet Explorer
     * @property engine.webkit {float|boolean} Chrome & Safari
     * @property engine.gecko {float|boolean} Firefox & Opera =< 6
     * @property engine.presto {float|boolean} Opera => 7
     * @property engine.khtml {float|boolean} Konqueror
     * @property engine.htmlayout {float|boolean} Windows and Windows Mobile embeded browser
     * @property engine.boxely {float|boolean} AOL
     */
    return (function () {
        var engine = {
                trident: false, // Internet Explorer
                webkit: false,  // Chrome & Safari
                gecko: false,   // Firefox & Opera =< 6
                presto: false,  // Opera => 7
                khtml: false,   // Konqueror
                htmlayout: false, // Windows and Windows Mobile embeded browser
                boxely: false   // AOL
            },
            useragent = window.navigator.userAgent,
            regex,
            engineName;

        for (engineName in engine) {
            if (engine.hasOwnProperty(engineName)) {
                regex = new RegExp(engineName + "\/([0-9]+.[0-9]*)", "i");
                if (regex.exec(useragent)) {
                    try {
                        engine[engineName] = parseFloat(useragent.match(regex)[1]);
                    } catch (err) {
                        engine[engineName] = true;
                    }
                    break;
                }
            }
        }
        return engine;
    }());
});
