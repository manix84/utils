/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('utils/useragent/engine', function () {

    /**
     * @exports utils/useragent/engine
     * @property trident {String|Boolean} Internet Explorer
     * @property webkit {String|Boolean} Chrome & Safari
     * @property gecko {String|Boolean} Firefox & Opera =< 6
     * @property presto {String|Boolean} Opera => 7
     * @property khtml {String|Boolean} Konqueror
     * @property htmlayout {String|Boolean} Windows and Windows Mobile embeded browser
     * @property boxely {String|Boolean} AOL
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
            useragent = window.navigator.userAgent.toLowerCase(),
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
